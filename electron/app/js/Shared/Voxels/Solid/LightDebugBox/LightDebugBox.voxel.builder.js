import { LightDebugBoxVoxelData } from "./LightDebugBox.voxel.data.js";
let lightDebugBoxTextures = {};
export const LightDebugBoxVoxelBuilderThread = {
    data: LightDebugBoxVoxelData,
    trueShapeId: 1,
    hooks: {
        texturesRegistered: (DVEB) => {
            lightDebugBoxTextures = {
                0: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-0"),
                1: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-1"),
                2: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-2"),
                3: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-3"),
                4: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-4"),
                5: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-5"),
                6: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-6"),
                7: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-7"),
                8: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-8"),
                9: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-9"),
                10: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-10"),
                11: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-11"),
                12: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-12"),
                13: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-13"),
                14: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-14"),
                15: DVEB.textureManager.getTextureUV("solid", "light-debug", "light-level-15"),
            };
        }
    },
    process: function (data, DVEB) {
        const trueX = data.chunkX + data.x;
        const trueY = data.chunkY + data.y;
        const trueZ = data.chunkZ + data.z;
        const light = DVEB.voxelHelper.getLightValue(trueX, trueY + 1, trueZ, "r");
        let uv = lightDebugBoxTextures[light];
        if (data.exposedFaces[0]) {
            data.uvTemplate.push(uv);
        }
        if (data.exposedFaces[1]) {
            data.uvTemplate.push(uv);
        }
        if (data.exposedFaces[2]) {
            data.uvTemplate.push(uv);
        }
        if (data.exposedFaces[3]) {
            data.uvTemplate.push(uv);
        }
        if (data.exposedFaces[4]) {
            data.uvTemplate.push(uv);
        }
        if (data.exposedFaces[5]) {
            data.uvTemplate.push(uv);
        }
        data.shapeTemplate.push(this.trueShapeId);
        data.shapeStateTemplate.push(0);
        DVEB.voxelHelper.processVoxelLight(data, this.data);
    },
};
