export declare const DVER: {
    UTIL: {
        createPromiseCheck: (data: {
            check: () => boolean;
            onReady?: (() => any) | undefined;
            checkInterval: number;
            failTimeOut?: number | undefined;
            onFail?: (() => any) | undefined;
        }) => Promise<boolean>;
        getEnviorment(): "node" | "browser";
        getAQueue<T>(): import("../Global/Util/Queue.js").Queue<T>;
        merge<T_1, K>(target: T_1, newObject: K): T_1 & K;
        degtoRad(degrees: number): number;
        radToDeg(radians: number): number;
    };
    worldComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
    nexusComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    dataComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    fxComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    richWorldComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase & {
        $INIT(): void;
    };
    constructorCommManager: import("../Libs/ThreadComm/Manager/CommManager.js").CommManager & {
        $INIT(): void;
        createConstructors(path: string, numBuilders?: number): void;
        setConstructors(constructors: Worker[]): void;
        syncSettings(data: any): void;
    };
    settings: {
        settings: {
            nexus: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
            };
            data: {
                enabled: boolean;
                autoSyncChunks: boolean;
            };
            fx: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
            };
            server: {
                enabled: boolean;
            };
            richWorld: {
                enabled: boolean;
                autoSyncChunks: boolean;
                autoSyncVoxelPalette: boolean;
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
            flow: {
                enable: boolean;
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
                mode: string;
                doAO: boolean;
                doSunLight: boolean;
                doRGBLight: boolean;
                disableFloraShaderEffects: boolean;
                disableFluidShaderEffects: boolean;
            };
        };
        getSettings(): any;
        syncSettings(data: any): void;
        __syncWithObjects(): void;
        syncWithWorldBounds(worldBounds: {
            bounds: {
                MinZ: number;
                MaxZ: number;
                MinX: number;
                MaxX: number;
                MinY: number;
                MaxY: number;
            };
            _hashMask(n: number): number;
            hash(x: number, y: number, z: number): number;
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionColumnWidth: number;
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
                y: number;
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
            __columnPosition: {
                x: number;
                z: number;
                y: number;
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
            getChunkKey(chunkPOS: any): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: any): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: any): {
                x: number;
                y: number;
                z: number;
            };
            getRichPositionKey(x: number, y: number, z: number): string;
            getVoxelPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            _columnIndexPosition: {
                x: number;
                y: number;
                z: number;
            };
            getColumnIndex(x: number, z: number, y: number): number;
            getChunkColumnIndex(y: number): number;
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
        }): void;
        getSettingsCopy(): any;
        syncChunkInRichWorldThread(): boolean;
        richDataEnabled(): boolean;
        syncChunkInFXThread(): boolean;
        syncChunkInDataThread(): boolean;
        syncChunksInNexusThread(): boolean;
        doSunPropagation(): boolean;
        doRGBPropagation(): boolean;
        doLight(): boolean;
        doFlow(): boolean;
    };
    renderManager: {
        fogOptions: import("../Meta/Render/Render/Render.options.types.js").RenderFogOptions;
        fogData: any;
        effectOptions: import("../Meta/Render/Render/Render.options.types.js").RenderEffectsOptions;
        shaderBuilder: {
            buildFloraVertexShader(uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, overlayAnimationFunction?: string): string;
            buildFluidVertexShader(uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, overlayAnimationFunction?: string): string;
            buildSolidVertexShader(uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, overlayAnimationFunction?: string): string;
            buildItemVertexShader(uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, overlayAnimationFunction?: string): string;
            buildMagmaVertexShader(uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, overlayAnimationFunction?: string): string;
            buildSolidFragmentShader(): string;
            buildItemFragmentShader(): string;
            buildFluidFragmentShader(): string;
            buildFloraFragmentShader(): string;
            buildMagmaFragmentShader(): string;
            getDefaultVertexShader(voxelSubstance: any, uniformRegister?: string, animationFunction?: string, overlayUniformRegister?: string, ovlerayAnimationFunction?: string): string;
            getDefaultFragmentShader(voxelSubstance: any): string;
            getSkyBoxVertexShader(): string;
            getSkyBoxFragmentShader(): string;
        };
        textureCreator: {
            context: CanvasRenderingContext2D | null;
            imgWidth: number;
            imgHeight: number;
            defineTextureDimensions(width: number, height: number): void;
            setUpImageCreation(): void;
            createMaterialTexture(name: string, scene: any, images: string[], width?: number, height?: number): Promise<any>;
            _loadImages(imgPath: string, width: number, height: number): Promise<Uint8ClampedArray>;
            _combineImageData(totalLength: number, arrays: Uint8ClampedArray[]): Uint8ClampedArray;
            getTextureBuffer(imgPath: string, width?: number, height?: number): Promise<Uint8ClampedArray>;
        };
        animationManager: {
            animatedMaterials: Record<import("../Meta/index.js").TextureTypes, any>;
            animCount: number;
            animations: {
                uniformShaderId: string;
                keys: number[];
                currentFrame: number;
                currentCount: number;
                keyCounts: number[];
                substance: import("../Meta/index.js").TextureTypes;
            }[];
            registerAnimations(voxelSubstanceType: import("../Meta/index.js").TextureTypes, animations: number[][], animationTimes: number[][], overlay?: boolean): {
                uniforms: string[];
                uniformRegisterCode: string;
                animationFunctionCode: string;
            };
            registerMaterial(voxelSubstanceType: import("../Meta/index.js").TextureTypes, material: any): void;
            startAnimations(): void;
        };
        solidMaterial: {
            material: any;
            time: number;
            getMaterial(): any;
            updateFogOptions(data: any): void;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(data: import("../Meta/Render/Materials/Material.types.js").MaterialCreateData): any;
            overrideMaterial(material: any): void;
            runEffects(): void;
        };
        floraMaterial: {
            material: any;
            doEffects: boolean;
            time: number;
            getMaterial(): any;
            updateFogOptions(data: any): void;
            updateEffects(doEffects: boolean): void;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(data: any): any;
            runEffects(): void;
        };
        fluidMaterial: {
            material: any;
            doEffects: boolean;
            time: number;
            getMaterial(): any;
            updateFogOptions(data: any): void;
            updateEffects(doEffects: boolean): void;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(data: import("../Meta/Render/Materials/Material.types.js").MaterialCreateData): any;
            runEffects(): void;
        };
        magmaMaterial: {
            material: any;
            getMaterial(): any;
            time: number;
            updateFogOptions(data: any): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(data: import("../Meta/Render/Materials/Material.types.js").MaterialCreateData): any;
            runEffects(): void;
        };
        itemMaterial: {
            material: any;
            context: CanvasRenderingContext2D | null;
            time: number;
            updateFogOptions(data: any): void;
            getMaterial(): any;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(data: import("../Meta/Render/Materials/Material.types.js").MaterialCreateData): any;
            overrideMaterial(material: any): void;
            runEffects(): void;
        };
        solidStandardMaterial: {
            material: any;
            plugin: import("./Render/Materials/Solid/Standard/SolidMaterial.bjsmp.js").SolidMaterialPlugin | null;
            $INIT(texture: any, scnee: any): void;
            getMaterial(): any;
        };
        fluidStandardMaterial: {
            material: any;
            reflectionprobe: any;
            plugin: import("./Render/Materials/Fluid/Standard/FluidMaterial.bjsmp.js").FluidMaterialPlugin | null;
            $INIT(texture: any, scene: any): void;
            getMaterial(): any;
            addToRenderList(mesh: any): void;
        };
        skyBoxMaterial: {
            material: any;
            context: CanvasRenderingContext2D | null;
            time: number;
            getMaterial(): any;
            updateFogOptions(data: any): void;
            setSunLightLevel(level: number): void;
            setBaseLevel(level: number): void;
            updateMaterialSettings(settings: any): void;
            createMaterial(scene: any): any;
            overrideMaterial(material: any): void;
            runEffects(): void;
        };
        solidMesh: any;
        floraMesh: import("../Meta/index.js").VoxelMeshInterface;
        fluidMesh: import("../Meta/index.js").VoxelMeshInterface;
        magmaMesh: any;
        itemMesh: {
            pickable: boolean;
            checkCollisions: boolean;
            seralize: boolean;
            clearCachedGeometry: boolean;
            createTemplateMesh(scene: any): any;
            syncSettings(settings: import("../Meta/index.js").EngineSettingsData): void;
            _applyVertexData(mesh: any, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): void;
            rebuildMeshGeometory(mesh: any, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): Promise<any>;
            createMesh(x: number, y: number, z: number, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): Promise<any>;
        };
        scene: any;
        reStart(): void;
        setScene(scene: any): void;
        updateFogOptions(options: any): void;
        _setFogData(): void;
        $INIT(): void;
        updateShaderEffectOptions(options: any): void;
        syncSettings(settings: any): void;
        getScene(): any;
        createSkyBoxMaterial(scene?: any): any;
        setSunLevel(level: number): void;
        setBaseLevel(level: number): void;
    };
    meshManager: {
        scene: any;
        runningUpdate: boolean;
        meshes: Record<any, Record<number, Record<string, any>>>;
        entityMesh: {
            pickable: boolean;
            checkCollisions: boolean;
            seralize: boolean;
            clearCachedGeometry: boolean;
            createTemplateMesh(scene: any): any;
            syncSettings(settings: import("../Meta/index.js").EngineSettingsData): void;
            _applyVertexData(mesh: any, data: any): void;
            rebuildMeshGeometory(mesh: any, data: any): Promise<any>;
            createMesh(x: number, y: number, z: number, data: any): Promise<any>;
        };
        itemMesh: {
            pickable: boolean;
            checkCollisions: boolean;
            seralize: boolean;
            clearCachedGeometry: boolean;
            createTemplateMesh(scene: any): any;
            syncSettings(settings: import("../Meta/index.js").EngineSettingsData): void;
            _applyVertexData(mesh: any, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): void;
            rebuildMeshGeometory(mesh: any, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): Promise<any>;
            createMesh(x: number, y: number, z: number, data: import("../Meta/Render/Meshes/ItemMesh.types.js").ItemMeshSetData): Promise<any>;
        };
        meshMakers: Record<any, any>;
        $INIT(): void;
        setScene(scene: any): void;
        reStart(): void;
        removeChunkMesh(dimesnion: number, type: any, chunkKey: string): void;
        handleItemUpdate(x: number, y: number, z: number, data: any): void;
        handleEntityUpdate(x: number, y: number, z: number, data: any): void;
        handleChunkUpdate(dimesnion: number, type: any, chunkKey: string, data: import("../Meta/Tasks/RenderTasks.types.js").SetChunkMeshTask): void;
        requestChunkBeRemoved(dimesnion: number, chunkKey: string): void;
        _updateMesh(dimesnion: number, type: any, chunkKey: string, data: any): Promise<void>;
        _buildNewMesh(dimesnion: number, type: any, chunkKey: string, data: any): Promise<void>;
    };
    data: {
        worldBounds: {
            bounds: {
                MinZ: number;
                MaxZ: number;
                MinX: number;
                MaxX: number;
                MinY: number;
                MaxY: number;
            };
            _hashMask(n: number): number;
            hash(x: number, y: number, z: number): number;
            chunkXPow2: number;
            chunkYPow2: number;
            chunkZPow2: number;
            chunkXSize: number;
            chunkYSize: number;
            chunkZSize: number;
            chunkTotalVoxels: number;
            chunkArea: number;
            regionColumnWidth: number;
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
                y: number;
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
            __columnPosition: {
                x: number;
                z: number;
                y: number;
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
            getChunkKey(chunkPOS: any): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: any): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: any): {
                x: number;
                y: number;
                z: number;
            };
            getRichPositionKey(x: number, y: number, z: number): string;
            getVoxelPosition(x: number, y: number, z: number): {
                x: number;
                y: number;
                z: number;
            };
            _columnIndexPosition: {
                x: number;
                y: number;
                z: number;
            };
            getColumnIndex(x: number, z: number, y: number): number;
            getChunkColumnIndex(y: number): number;
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
        };
    };
    textureManager: {
        defaultTexturePath: string;
        processedTextureData: any;
        overlayProcessedTextureData: any;
        textureData: any;
        textureExtension: Record<any, string>;
        textures: Record<any, any[]>;
        uvTextureMap: Record<any, Record<string, number>>;
        overylayTextures: Record<any, any[]>;
        overlayUVTextureMap: Record<any, Record<string, number>>;
        normalMapTextures: Record<any, any[]>;
        noramlMapUVTexturesMap: Record<any, Record<string, number>>;
        textureTypes: any[];
        _processVariations(texture: any, texturePaths: string[], animations: Record<any, number[][]>, textureAnimatioTimes: Record<any, number[][]>, extension: string, count: number, path: string, textureType: any, overlay?: boolean, normalMap?: boolean): number;
        generateTexturesData(overlay?: boolean, normalMap?: boolean): void;
        defineDefaultTexturePath(path: string): void;
        defineDefaultTextureExtension(textureType: any, ext: string): void;
        getTextureUV(textureType: any, textureId: string, varation?: string | undefined): number;
        registerTexture(textureType: any, textureData: any): void;
        releaseTextureData(): void;
    };
    renderedEntites: {
        scene: any;
        entityTemplate: Record<string, {
            template: any;
            data: any;
        }>;
        loaedEntities: Record<any, Record<string, any>>;
        setScene(scene: any): void;
        registerEntity(id: string, entityData: any, renderedEntity: any): void;
        spawnEntity(entityId: string, identiferId: string, positionSBA: SharedArrayBuffer, statesSBA: SharedArrayBuffer): void;
        deSpawnEntity(entityId: string, identiferId: string): false | undefined;
    };
    tasks: {
        setChunk: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any>;
        removeChunk: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any>;
    };
    _handleOptions(): void;
    syncSettingsWithWorkers(data: any): void;
    reStart(data: any): Promise<void>;
    $INIT(initData: any): Promise<void>;
    $SCENEINIT(data: {
        scene: any;
    }): Promise<void>;
    __createWorker(path: string): Worker;
};
export declare type DivineVoxelEngineRender = typeof DVER;
