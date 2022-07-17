//objects
import { Util } from "../../../Global/Util.helper.js";
import { WorldMatrix } from "../../../Matrix/WorldMatrix.js";
import { DVEB } from "../DivineVoxelEngineBuilder.js";
import { DVEC } from "../../DivineVoxelEngineConstructor.js";
//functions
import { CalculateVoxelLight, VoxelLightMixCalc, } from "./Functions/CalculateVoxelLight.js";
import { CalculateFlow } from "./Functions/CalculateFlow.js";
/**# Chunk Processor
 * ---
 * Takes the given world data and generates templates
 * to build chunk meshes.
 */
export const Processor = {
    LOD: 1,
    heightByte: Util.getHeightByte(),
    voxelByte: Util.getVoxelByte(),
    faceByte: Util.getFaceByte(),
    _3dArray: Util.getFlat3DArray(),
    lightByte: Util.getLightByte(),
    worldMatrix: WorldMatrix,
    calculatFlow: CalculateFlow,
    voxellightMixCalc: VoxelLightMixCalc,
    doVoxelLight: CalculateVoxelLight,
    chunkTemplates: {},
    exposedFaces: [],
    faceStates: [],
    textureRotation: [],
    settings: {
        doAO: true,
        doSun: true,
        doRGB: true,
    },
    getBaseTemplateNew() {
        return {
            solid: {
                positionTemplate: [],
                faceTemplate: [],
                uvTemplate: [],
                overlayUVTemplate: [],
                shapeTemplate: [],
                shapeStateTemplate: [],
                colorTemplate: [],
                lightTemplate: [],
                aoTemplate: [],
            },
            transparent: {
                positionTemplate: [],
                faceTemplate: [],
                uvTemplate: [],
                overlayUVTemplate: [],
                shapeTemplate: [],
                shapeStateTemplate: [],
                colorTemplate: [],
                lightTemplate: [],
                aoTemplate: [],
            },
            flora: {
                positionTemplate: [],
                faceTemplate: [],
                uvTemplate: [],
                overlayUVTemplate: [],
                shapeTemplate: [],
                shapeStateTemplate: [],
                colorTemplate: [],
                lightTemplate: [],
                aoTemplate: [],
            },
            fluid: {
                positionTemplate: [],
                faceTemplate: [],
                uvTemplate: [],
                overlayUVTemplate: [],
                shapeTemplate: [],
                shapeStateTemplate: [],
                colorTemplate: [],
                lightTemplate: [],
                aoTemplate: [],
                flowTemplate: [],
            },
            magma: {
                positionTemplate: [],
                faceTemplate: [],
                uvTemplate: [],
                overlayUVTemplate: [],
                shapeTemplate: [],
                shapeStateTemplate: [],
                colorTemplate: [],
                lightTemplate: [],
                aoTemplate: [],
                flowTemplate: [],
            },
        };
    },
    faceIndexMap: {
        top: 0,
        bottom: 1,
        east: 2,
        west: 3,
        south: 4,
        north: 5,
    },
    cullCheck(face, voxel, voxelState, shapeState, x, y, z, faceBit) {
        const neightborVoxel = this.worldMatrix.getVoxelData(x, y, z);
        let finalResult = false;
        if (neightborVoxel) {
            const nv = DVEC.voxelManager.getVoxel(neightborVoxel.id);
            let substanceRuleResult = DVEB.voxelHelper.substanceRuleCheck(voxel.data, neightborVoxel);
            const shape = DVEC.DVEB.shapeManager.getShape(voxel.trueShapeId);
            const neighborVoxelShape = DVEC.DVEB.shapeManager.getShape(nv.trueShapeId);
            const neighborVoxelShapState = this.worldMatrix.getVoxelShapeState(x, y, z);
            let shapeResult = shape.cullFace(face, substanceRuleResult, shapeState, voxel.data, neightborVoxel, neighborVoxelShape, neighborVoxelShapState);
            if (!voxel.cullFace) {
                finalResult = shapeResult;
            }
            else {
                finalResult = voxel.cullFace(face, substanceRuleResult, shapeResult, neightborVoxel, voxelState, shapeState, x, y, z);
            }
        }
        else {
            finalResult = true;
        }
        const faceIndex = this.faceIndexMap[face];
        if (finalResult) {
            this.exposedFaces[faceIndex] = 1;
            this.faceStates[faceIndex] = 0;
            this.textureRotation[faceIndex] = 0;
            faceBit = this.faceByte.markFaceAsExposed(face, faceBit);
        }
        else {
            this.exposedFaces[faceIndex] = 0;
            this.faceStates[faceIndex] = -1;
            this.textureRotation[faceIndex] = 0;
        }
        return faceBit;
    },
    faceStateCheck(face, faceBit) {
        const faceIndex = this.faceIndexMap[face];
        if (this.exposedFaces[faceIndex]) {
            faceBit = this.faceByte.setFaceRotateState(face, this.faceStates[faceIndex], faceBit);
            faceBit = this.faceByte.setFaceTextureState(face, this.textureRotation[faceIndex], faceBit);
        }
        return faceBit;
    },
    makeAllChunkTemplates(chunk, chunkX, chunkY, chunkZ, LOD = 1) {
        this.LOD = LOD;
        const voxels = chunk.voxels;
        const template = this.getBaseTemplateNew();
        let maxX = DVEC.worldBounds.chunkXSize;
        let maxZ = DVEC.worldBounds.chunkZSize;
        for (let x = 0; x < maxX; x += LOD) {
            for (let z = 0; z < maxZ; z += LOD) {
                let minY = this.heightByte.getLowestExposedVoxel(x, z, chunk.heightMap);
                let maxY = this.heightByte.getHighestExposedVoxel(x, z, chunk.heightMap) + 1;
                for (let y = minY; y < maxY; y += LOD) {
                    const voxelCheck = DVEC.worldMatrix.getVoxel(chunkX + x, chunkY + y, chunkZ + z);
                    if (!voxelCheck ||
                        voxelCheck[0] == "dve:air" ||
                        voxelCheck[0] == "dve:barrier")
                        continue;
                    const voxelObject = DVEC.voxelManager.getVoxel(voxelCheck[0]);
                    if (!voxelObject)
                        continue;
                    const voxelState = voxelCheck[1];
                    const voxelShapeState = this.worldMatrix.getVoxelShapeState(chunkX + x, chunkY + y, chunkZ + z);
                    let faceBit = 0;
                    let tx = x + chunkX;
                    let ty = y + chunkY;
                    let tz = z + chunkZ;
                    faceBit = this.cullCheck("top", voxelObject, voxelState, voxelShapeState, tx, ty + LOD, tz, faceBit);
                    faceBit = this.cullCheck("bottom", voxelObject, voxelState, voxelShapeState, tx, ty - LOD, tz, faceBit);
                    faceBit = this.cullCheck("east", voxelObject, voxelState, voxelShapeState, tx + LOD, ty, tz, faceBit);
                    faceBit = this.cullCheck("west", voxelObject, voxelState, voxelShapeState, tx - LOD, ty, tz, faceBit);
                    faceBit = this.cullCheck("south", voxelObject, voxelState, voxelShapeState, tx, ty, tz - LOD, faceBit);
                    faceBit = this.cullCheck("north", voxelObject, voxelState, voxelShapeState, tx, ty, tz + LOD, faceBit);
                    if (faceBit == 0)
                        continue;
                    let baseTemplate;
                    if (voxelObject.data.substance == "transparent") {
                        baseTemplate = template["solid"];
                    }
                    else {
                        baseTemplate = template[voxelObject.data.substance];
                    }
                    baseTemplate.shapeStateTemplate.push(voxelShapeState);
                    let level = 0;
                    if (voxelObject.data.substance == "fluid" ||
                        voxelObject.data.substance == "magma") {
                        level = this.worldMatrix.getLevel(tx, ty, tz);
                    }
                    voxelObject.process({
                        voxelState: voxelState,
                        voxelShapeState: voxelShapeState,
                        level: level,
                        exposedFaces: this.exposedFaces,
                        faceStates: this.faceStates,
                        textureRotations: this.textureRotation,
                        overlayUVTemplate: baseTemplate.overlayUVTemplate,
                        uvTemplate: baseTemplate.uvTemplate,
                        colorTemplate: baseTemplate.colorTemplate,
                        aoTemplate: baseTemplate.aoTemplate,
                        lightTemplate: baseTemplate.lightTemplate,
                        chunkX: chunkX,
                        chunkY: chunkY,
                        chunkZ: chunkZ,
                        x: x,
                        y: y,
                        z: z,
                    }, DVEB);
                    baseTemplate.shapeTemplate.push(voxelObject.trueShapeId);
                    baseTemplate.positionTemplate.push(x, y, z);
                    faceBit = this.faceStateCheck("top", faceBit);
                    faceBit = this.faceStateCheck("bottom", faceBit);
                    faceBit = this.faceStateCheck("east", faceBit);
                    faceBit = this.faceStateCheck("west", faceBit);
                    faceBit = this.faceStateCheck("south", faceBit);
                    faceBit = this.faceStateCheck("north", faceBit);
                    baseTemplate.faceTemplate.push(faceBit);
                    if (this.exposedFaces[0] &&
                        (voxelObject.data.substance == "fluid" ||
                            voxelObject.data.substance == "magma")) {
                        this.calculatFlow(voxelObject.data, tx, ty, tz, baseTemplate.flowTemplate);
                    }
                }
            }
        }
        return template;
    },
    processVoxelLight(data, ignoreAO = false) {
        this.doVoxelLight(data, data.chunkX + data.x, data.chunkY + data.y, data.chunkZ + data.z, ignoreAO, this.LOD);
    },
    syncSettings(settings) {
        const materials = settings.materials;
        if (materials?.doAO) {
            this.settings.doAO = true;
        }
        if (materials?.doRGBLight) {
            this.settings.doRGB = true;
        }
        if (materials?.doSunLight) {
            this.settings.doSun = true;
        }
    },
};
