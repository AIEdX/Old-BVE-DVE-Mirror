/// <reference types="babylonjs" />
import type { DVERInitData } from "Meta/Render/DVER";
import type { EngineSettingsData } from "Meta/Global/EngineSettings.types";
export declare const DVER: {
    worldBounds: {
        __maxChunkYSize: number;
        bounds: {
            MinZ: number;
            MaxZ: number;
            MinX: number;
            MaxX: number;
            MinY: number;
            MaxY: number;
        };
        chunkXPow2: number;
        chunkYPow2: number;
        chunkZPow2: number;
        chunkXSize: number;
        chunkYSize: number;
        chunkZSize: number;
        chunkTotalVoxels: number;
        chunkArea: number;
        regionXPow2: number;
        regionYPow2: number;
        regionZPow2: number;
        regionXSize: number;
        regionYSize: number;
        regionZSize: number;
        __regionPosition: {
            x: number;
            y: number;
            z: number;
        };
        __worldColumnPosition: {
            x: number;
            z: number;
        };
        __chunkPosition: {
            x: number;
            y: number;
            z: number;
        };
        __voxelPosition: {
            x: number;
            y: number;
            z: number;
        };
        syncBoundsWithArrays(): void;
        setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
        isPositonOutsideOfBounds(x: number, y: number, z: number): boolean;
        isPositonInBounds(x: number, y: number, z: number): boolean;
        setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
        setRegionBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
        getRegionPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getChunkPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getChunkKey(chunkPOS: import("../Meta/Util.types.js").Position3Matrix): string;
        getChunkKeyFromPosition(x: number, y: number, z: number): string;
        getRegionKey(regionPOS: import("../Meta/Util.types.js").Position3Matrix): string;
        getRegionKeyFromPosition(x: number, y: number, z: number): string;
        getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../Meta/Util.types.js").Position3Matrix): {
            x: number;
            y: number;
            z: number;
        };
        getVoxelPosition(x: number, y: number, z: number): {
            x: number;
            y: number;
            z: number;
        };
        getWorldColumnKeyFromObj(position: import("../Meta/Util.types.js").Position3Matrix): string;
        getWorldColumnKey(x: number, z: number): string;
        getWorldColumnPosition(x: number, z: number): {
            x: number;
            z: number;
        };
    };
    worldComm: import("../Meta/Comms/InterComm.types.js").InterCommInterface;
    nexusComm: import("../Meta/Comms/InterComm.types.js").InterCommInterface & {
        $INIT(): void;
    };
    dataComm: import("../Meta/Comms/InterComm.types.js").InterCommInterface & {
        $INIT(): void;
    };
    constructorCommManager: {
        count: number;
        constructors: import("../Meta/Comms/InterComm.types.js").InterCommInterface[];
        $INIT(): void;
        createConstructors(path: string, numBuilders?: number): void;
        setConstructors(constructors: Worker[]): void;
        syncSettings(data: any): void;
    };
    settings: {
        context: "MatrixLoadedThread" | "DVEW" | "DVER" | "DVEP" | "DVEB" | "DVEC" | "DVEN";
        settings: {
            nexus: {
                enabled: boolean;
                autoSyncChunks: boolean;
            };
            data: {
                enabled: boolean;
                autoSyncChunks: boolean;
            };
            textureOptions: {
                animationTime: number;
                width: number;
                height: number;
            };
            updating: {
                autoRebuild: boolean;
            };
            world: {
                voxelPaletteMode: string;
                maxX: number;
                minX: number;
                maxZ: number;
                minZ: number;
                maxY: number;
                minY: number;
            };
            regions: {
                regionXPow2: number;
                regionYPow2: number;
                regionZPow2: number;
            };
            chunks: {
                autoHeightMap: boolean;
                chunkXPow2: number;
                chunkYPow2: number;
                chunkZPow2: number;
            };
            voxels: {
                doColors: boolean;
            };
            lighting: {
                doAO: boolean;
                doSunLight: boolean;
                doRGBLight: boolean;
                autoRGBLight: boolean;
                autoSunLight: boolean;
            };
            meshes: {
                clearChachedGeometry: boolean;
                checkMagmaCollisions: boolean;
                checkFluidCollisions: boolean;
                checkFloraCollisions: boolean;
                checkSolidCollisions: boolean;
                seralize: boolean;
                pickable: boolean;
            };
            materials: {
                doAO: boolean;
                doSunLight: boolean;
                doRGBLight: boolean;
                disableFloraShaderEffects: boolean;
                disableFluidShaderEffects: boolean;
            };
        };
        setContext(context: "MatrixLoadedThread" | "DVEW" | "DVER" | "DVEP" | "DVEB" | "DVEC" | "DVEN"): void;
        getSettings(): EngineSettingsData;
        syncSettings(data: EngineSettingsData): void;
        syncWithWorldBounds(worldBounds: {
            __maxChunkYSize: number;
            bounds: {
                MinZ: number;
                MaxZ: number;
                MinX: number;
                MaxX: number;
                MinY: number;
                MaxY: number;
            };
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionXPow2: number;
            regionYPow2: number;
            regionZPow2: number;
            regionXSize: number;
            regionYSize: number;
            regionZSize: number;
            __regionPosition: {
                x: number;
                y: number;
                z: number;
            };
            __worldColumnPosition: {
                x: number;
                z: number;
            };
            __chunkPosition: {
                x: number;
                y: number;
                z: number;
            };
            __voxelPosition: {
                x: number;
                y: number;
                z: number;
            };
            syncBoundsWithArrays(): void;
            setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
            isPositonOutsideOfBounds(x: number, y: number, z: number): boolean;
            isPositonInBounds(x: number, y: number, z: number): boolean;
            setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
            setRegionBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
            getRegionPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getChunkPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getChunkKey(chunkPOS: import("../Meta/Util.types.js").Position3Matrix): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("../Meta/Util.types.js").Position3Matrix): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../Meta/Util.types.js").Position3Matrix): {
                x: number;
                y: number;
                z: number;
            };
            getVoxelPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getWorldColumnKeyFromObj(position: import("../Meta/Util.types.js").Position3Matrix): string;
            getWorldColumnKey(x: number, z: number): string;
            getWorldColumnPosition(x: number, z: number): {
                x: number;
                z: number;
            };
        }): void;
        getSettingsCopy(): any;
        syncChunkInDataThread(): boolean;
        syncChunksInNexus(): boolean;
        doSunPropagation(): boolean;
        doRGBPropagation(): boolean;
    };
    renderManager: {
        shaderBuilder: {
            buildFloraVertexShader(uniformRegister?: string, animationFunction?: string): string;
            buildFluidVertexShader(uniformRegister?: string, animationFunction?: string): string;
            buildSolidVertexShader(uniformRegister?: string, animationFunction?: string): string;
            buildMagmaVertexShader(uniformRegister?: string, animationFunction?: string): string;
            buildSolidFragmentShader(): string;
            buildFluidFragmentShader(): string;
            buildFloraFragmentShader(): string;
            buildMagmaFragmentShader(): string;
            getDefaultVertexShader(voxelSubstance: import("../Meta/index.js").VoxelSubstanceType, uniformRegister?: string, animationFunction?: string): string;
            getDefaultFragmentShader(voxelSubstance: import("../Meta/index.js").VoxelSubstanceType): string;
        };
        textureCreator: {
            context: CanvasRenderingContext2D | null;
            imgWidth: number;
            imgHeight: number;
            defineTextureDimensions(width: number, height: number): void;
            setUpImageCreation(): void;
            createMaterialTexture(scene: BABYLON.Scene, images: string[], width?: number, height?: number): Promise<BABYLON.RawTexture2DArray>;
            _loadImages(imgPath: string, width: number, height: number): Promise<Uint8ClampedArray>;
            _combineImageData(totalLength: number, arrays: Uint8ClampedArray[]): Uint8ClampedArray;
            getTextureBuffer(imgPath: string, width?: number, height?: number): Promise<Uint8ClampedArray>;
        };
        animationManager: {
            animatedMaterials: Record<import("../Meta/index.js").VoxelSubstanceType, BABYLON.ShaderMaterial>;
            animCount: number;
            animations: {
                uniformShaderId: string;
                keys: number[];
                currentFrame: number;
                currentCount: number;
                keyCounts: number[];
                substance: import("../Meta/index.js").VoxelSubstanceType;
            }[];
            registerAnimations(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType, animations: number[][], animationTimes: number[][]): {
                uniforms: string[];
                uniformRegisterCode: string;
                animationFunctionCode: string;
            };
            registerMaterial(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType, material: BABYLON.ShaderMaterial): void;
            startAnimations(): void;
        };
        solidMaterial: {
            material: BABYLON.ShaderMaterial | null;
            context: CanvasRenderingContext2D | null;
            getMaterial(): BABYLON.ShaderMaterial | null;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: EngineSettingsData): void;
            createMaterial(settings: EngineSettingsData, scene: BABYLON.Scene, texture: BABYLON.RawTexture2DArray, animations: number[][], animationTimes: number[][]): BABYLON.ShaderMaterial;
            overrideMaterial(material: any): void;
        };
        floraMaterial: {
            material: BABYLON.ShaderMaterial | null;
            context: CanvasRenderingContext2D | null;
            getMaterial(): BABYLON.ShaderMaterial | null;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: EngineSettingsData): void;
            createMaterial(settings: EngineSettingsData, scene: BABYLON.Scene, texture: BABYLON.RawTexture2DArray, animations: number[][], animationTimes: number[][]): BABYLON.ShaderMaterial;
        };
        fluidMaterial: {
            material: BABYLON.ShaderMaterial | null;
            context: CanvasRenderingContext2D | null;
            getMaterial(): BABYLON.ShaderMaterial | null;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: EngineSettingsData): void;
            createMaterial(settings: EngineSettingsData, scene: BABYLON.Scene, texture: BABYLON.RawTexture2DArray, animations: number[][], animationTimes: number[][]): BABYLON.ShaderMaterial;
        };
        magmaMaterial: {
            material: BABYLON.ShaderMaterial | null;
            context: CanvasRenderingContext2D | null;
            getMaterial(): BABYLON.ShaderMaterial | null;
            updateMaterialSettings(settings: EngineSettingsData): void;
            createMaterial(scene: BABYLON.Scene, texture: BABYLON.RawTexture2DArray, animations: number[][], animationTimes: number[][]): BABYLON.ShaderMaterial;
        };
        solidMesh: import("../Meta/index.js").VoxelMeshInterface;
        floraMesh: import("../Meta/index.js").VoxelMeshInterface;
        fluidMesh: import("../Meta/index.js").VoxelMeshInterface;
        magmaMesh: import("../Meta/index.js").VoxelMeshInterface;
        scene: BABYLON.Scene | null;
        reStart(): void;
        setScene(scene: BABYLON.Scene): void;
        syncSettings(settings: EngineSettingsData): void;
        getScene(): BABYLON.Scene | null;
        setSunLevel(level: number): void;
        setBaseLevel(level: number): void;
    };
    meshManager: {
        scene: BABYLON.Scene | null;
        runningUpdate: boolean;
        meshes: Record<import("../Meta/index.js").VoxelSubstanceType, Record<string, BABYLON.Mesh>>;
        meshMakers: Record<import("../Meta/index.js").VoxelSubstanceType, import("../Meta/index.js").VoxelMeshInterface>;
        $INIT(): void;
        setScene(scene: BABYLON.Scene): void;
        reStart(): void;
        handleUpdateN(type: import("../Meta/index.js").VoxelSubstanceType, chunkKey: string, data: any): void;
        requestChunkBeRemoved(chunkKey: string): void;
        _updateMesh(type: import("../Meta/index.js").VoxelSubstanceType, chunkKey: string, data: any): Promise<void>;
        _buildNewMesh(type: import("../Meta/index.js").VoxelSubstanceType, chunkKey: string, data: any): Promise<void>;
    };
    textureManager: {
        defaultTexturePath: string;
        processedTextureData: import("../Meta/index.js").TextureProccesedData;
        textureData: import("../Meta/index.js").TextureData;
        textureExtension: Record<import("../Meta/index.js").VoxelSubstanceType, string>;
        textures: Record<import("../Meta/index.js").VoxelSubstanceType, import("../Meta/index.js").TextureData[]>;
        uvTextureMap: Record<import("../Meta/index.js").VoxelSubstanceType, Record<string, number>>;
        _processVariations(texture: import("../Meta/index.js").TextureData, texturePaths: string[], animations: Record<import("../Meta/index.js").VoxelSubstanceType, number[][]>, textureAnimatioTimes: Record<import("../Meta/index.js").VoxelSubstanceType, number[][]>, extension: string, count: number, path: string, substance: import("../Meta/index.js").VoxelSubstanceType): number;
        generateTexturesData(): import("../Meta/index.js").TextureProccesedData;
        defineDefaultTexturePath(path: string): void;
        defineDefaultTextureExtension(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType, ext: string): void;
        getTextureUV(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType, textureId: string, varation?: string | undefined): number;
        registerTexture(voxelSubstanceType: import("../Meta/index.js").VoxelSubstanceType, textureData: import("../Meta/index.js").TextureData): void;
    };
    renderedEntites: {
        scene: BABYLON.Scene | null;
        entityTemplate: Record<string, {
            template: import("../Meta/index.js").RenderedEntity;
            data: import("../Meta/index.js").RenderedEntityData;
        }>;
        loaedEntities: Record<import("../Meta/index.js").EntityTypes, Record<string, import("../Meta/index.js").RenderedEntityInterface>>;
        setScene(scene: BABYLON.Scene): void;
        registerEntity(id: string, entityData: import("../Meta/index.js").RenderedEntityData, renderedEntity: import("../Meta/index.js").RenderedEntity): void;
        spawnEntity(entityId: string, identiferId: string, positionSBA: SharedArrayBuffer, statesSBA: SharedArrayBuffer): void;
        deSpawnEntity(entityId: string, identiferId: string): false | undefined;
    };
    UTIL: {
        createPromiseCheck: (data: {
            check: () => boolean;
            onReady?: (() => any) | undefined;
            checkInterval: number;
            failTimeOut?: number | undefined;
            onFail?: (() => any) | undefined;
        }) => Promise<boolean>;
        getWorkerPort: (environment: "node" | "browser") => Promise<any>;
        getEnviorment(): "node" | "browser";
        getFlat3DArray(): {
            bounds: {
                x: number;
                y: number;
                z: number;
            };
            _position: {
                x: number;
                y: number;
                z: number;
            };
            setBounds(x: number, y: number, z: number): void;
            getValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): number;
            getValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): number;
            getValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): any;
            setValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            setValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            setValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            deleteValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): void;
            deleteUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): void;
            getIndex(x: number, y: number, z: number): number;
            getXYZ(index: number): import("../Meta/Util.types.js").Position3Matrix;
        };
        getFaceByte(): {
            _setFaceTextureState: Record<import("../Meta/Util.types.js").DirectionNames, (state: number, faceBit: number) => number>;
            _getFaceTextureState: Record<import("../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
            _setFaceRotateState: Record<import("../Meta/Util.types.js").DirectionNames, (state: number, faceBit: number) => number>;
            _getFaceRotateState: Record<import("../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
            _markExposedFace: Record<import("../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
            _checkExposedFace: Record<import("../Meta/Util.types.js").DirectionNames, (faceBit: number) => boolean>;
            markFaceAsExposed(direction: import("../Meta/Util.types.js").DirectionNames, rawData: number): number;
            isFaceExposed(direction: import("../Meta/Util.types.js").DirectionNames, rawData: number): boolean;
            setFaceRotateState(direction: import("../Meta/Util.types.js").DirectionNames, state: number, rawData: number): number;
            getFaceRotateState(direction: import("../Meta/Util.types.js").DirectionNames, rawData: number): number;
            setFaceTextureState(direction: import("../Meta/Util.types.js").DirectionNames, state: number, rawData: number): number;
            getFaceTextureState(direction: import("../Meta/Util.types.js").DirectionNames, rawData: number): number;
        };
        getHeightMapArray(): {
            bounds: {
                x: number;
                y: number;
                z: number;
            };
            _position: {
                x: number;
                y: number;
                z: number;
            };
            setBounds(x: number, y: number, z: number): void;
            getValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): number;
            getValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): number;
            getValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): any;
            setValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            setValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            setValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
            deleteValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): void;
            deleteUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): void;
            getIndex(x: number, y: number, z: number): number;
            getXYZ(index: number): import("../Meta/Util.types.js").Position3Matrix;
        };
        getHeightByte(): {
            heightMapArray: {
                bounds: {
                    x: number;
                    y: number;
                    z: number;
                };
                _position: {
                    x: number;
                    y: number;
                    z: number;
                };
                setBounds(x: number, y: number, z: number): void;
                getValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): number;
                getValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): number;
                getValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): any;
                setValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
                setValueUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
                setValueUseObjSafe(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels, value: number): void;
                deleteValue(x: number, y: number, z: number, array: import("../Meta/index.js").ChunkVoxels): void;
                deleteUseObj(position: import("../Meta/Util.types.js").Position3Matrix, array: import("../Meta/index.js").ChunkVoxels): void;
                getIndex(x: number, y: number, z: number): number;
                getXYZ(index: number): import("../Meta/Util.types.js").Position3Matrix;
            };
            positionByte: {
                _poisiton: {
                    x: number;
                    y: number;
                    z: number;
                };
                _positionMasks: {
                    x: number;
                    z: number;
                    y: number;
                };
                getY(byteData: number): number;
                getPosition(byteData: number): {
                    x: number;
                    y: number;
                    z: number;
                };
                setPosition(x: number, y: number, z: number): number;
                setPositionUseObj(positionObj: import("../Meta/Util.types.js").Position3Matrix): number;
            };
            _getHeightMapData: Record<import("../Meta/index.js").VoxelTemplateSubstanceType, (byteData: number) => number>;
            _setHeightMapData: Record<import("../Meta/index.js").VoxelTemplateSubstanceType, (height: number, byteData: number) => number>;
            _markSubstanceAsNotExposed: Record<import("../Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
            _markSubstanceAsExposed: Record<import("../Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
            _isSubstanceExposed: Record<import("../Meta/index.js").VoxelTemplateSubstanceType, (data: number) => boolean>;
            getStartingHeightMapValue(): number;
            updateChunkMinMax(voxelPOS: import("../Meta/Util.types.js").Position3Matrix, minMax: Uint32Array): void;
            getChunkMin(minMax: Uint32Array): number;
            getChunkMax(minMax: Uint32Array): number;
            calculateHeightRemoveDataForSubstance(height: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): boolean | undefined;
            calculateHeightAddDataForSubstance(height: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): void;
            getLowestExposedVoxel(x: number, z: number, heightMap: Uint32Array): number;
            getHighestExposedVoxel(x: number, z: number, heightMap: Uint32Array): number;
            isSubstanceExposed(substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): boolean;
            markSubstanceAsExposed(substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): void;
            markSubstanceAsNotExposed(substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): void;
            setMinYForSubstance(height: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): void;
            getMinYForSubstance(substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): number;
            setMaxYForSubstance(height: number, substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): void;
            getMaxYForSubstance(substance: import("../Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: Uint32Array): number;
        };
        getVoxelByte(): {
            setId(id: number, value: number): number;
            getId(value: number): number;
            decodeLightFromVoxelData(voxelData: number): number;
            encodeLightIntoVoxelData(voxelData: number, encodedLight: number): number;
        };
        getLightByte(): {
            _lightValues: number[];
            getS(value: number): number;
            getR(value: number): number;
            getG(value: number): number;
            getB(value: number): number;
            setS(value: number, sl: number): number;
            setR(value: number, sl: number): number;
            setG(value: number, sl: number): number;
            setB(value: number, sl: number): number;
            removeS(sl: number): number;
            hasRGBLight(sl: number): boolean;
            decodeLightFromVoxelData(voxelData: number): number;
            encodeLightIntoVoxelData(voxelData: number, encodedLight: number): number;
            setLightValues(values: number[]): number;
            getLightValues(value: number): number[];
            isLessThanForRGBRemove(n1: number, n2: number): boolean;
            isLessThanForRGBAdd(n1: number, n2: number): boolean;
            isGreaterOrEqualThanForRGBRemove(n1: number, n2: number): boolean;
            getMinusOneForRGB(sl: number, nl: number): number;
            removeRGBLight(sl: number): number;
            getFullSunLight(sl: number): number;
            isLessThanForSunAdd(n1: number, n2: number): boolean;
            isLessThanForSunAddDown(n1: number, n2: number): boolean;
            isLessThanForSunAddUp(n1: number, n2: number): boolean;
            getSunLightForUnderVoxel(sl: number, nl: number): number;
            getMinusOneForSun(sl: number, nl: number): number;
            isLessThanForSunRemove(n1: number, sl: number): boolean;
            isGreaterOrEqualThanForSunRemove(n1: number, sl: number): boolean;
            sunLightCompareForDownSunRemove(n1: number, sl: number): boolean;
            removeSunLight(sl: number): number;
        };
        getWorldBounds(): {
            __maxChunkYSize: number;
            bounds: {
                MinZ: number;
                MaxZ: number;
                MinX: number;
                MaxX: number;
                MinY: number;
                MaxY: number;
            };
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionXPow2: number;
            regionYPow2: number;
            regionZPow2: number;
            regionXSize: number;
            regionYSize: number;
            regionZSize: number;
            __regionPosition: {
                x: number;
                y: number;
                z: number;
            };
            __worldColumnPosition: {
                x: number;
                z: number;
            };
            __chunkPosition: {
                x: number;
                y: number;
                z: number;
            };
            __voxelPosition: {
                x: number;
                y: number;
                z: number;
            };
            syncBoundsWithArrays(): void;
            setWorldBounds(minX: number, maxX: number, minZ: number, maxZ: number, minY: number, maxY: number): void;
            isPositonOutsideOfBounds(x: number, y: number, z: number): boolean;
            isPositonInBounds(x: number, y: number, z: number): boolean;
            setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
            setRegionBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
            getRegionPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getChunkPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getChunkKey(chunkPOS: import("../Meta/Util.types.js").Position3Matrix): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("../Meta/Util.types.js").Position3Matrix): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("../Meta/Util.types.js").Position3Matrix): {
                x: number;
                y: number;
                z: number;
            };
            getVoxelPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            getWorldColumnKeyFromObj(position: import("../Meta/Util.types.js").Position3Matrix): string;
            getWorldColumnKey(x: number, z: number): string;
            getWorldColumnPosition(x: number, z: number): {
                x: number;
                z: number;
            };
        };
        getInfoByte(number?: number): {
            maxBit: number;
            minBit: number;
            maxDec: number;
            minDec: number;
            byteValue: number;
            getNumberValue(): number;
            setNumberValue(newValue: number): void;
            getBit(index: number): 0 | 1;
            getBitsArray(bitIndex: number, byteLength: number): (0 | 1)[];
            getHalfByteDec(bitIndex: number): number;
            setHalfByteBits(index: number, value: number): void;
            setBit(index: number, value: 0 | 1): void;
            toArray(): (0 | 1)[];
            toString(delimiter?: string): string;
        };
        degtoRad(degrees: number): number;
        radToDeg(radians: number): number;
    };
    _handleOptions(): void;
    _syncSettings(data: EngineSettingsData): void;
    reStart(data: EngineSettingsData): Promise<void>;
    $INIT(initData: DVERInitData): Promise<void>;
    $SCENEINIT(data: {
        scene: BABYLON.Scene;
    }): Promise<void>;
    __createWorker(path: string): Worker;
};
export declare type DivineVoxelEngineRender = typeof DVER;
