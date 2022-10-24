import type { EngineSettingsData } from "Meta/index.js";
export declare const DVEC: {
    environment: "node" | "browser";
    __settingsHaveBeenSynced: boolean;
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
        getSettings(): EngineSettingsData;
        syncSettings(data: EngineSettingsData): void;
        __syncWithObjects(): void;
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
            getChunkKey(chunkPOS: import("Meta/index.js").Position3Matrix): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("Meta/index.js").Position3Matrix): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("Meta/index.js").Position3Matrix): {
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
    };
    dataSyncNode: {
        chunk: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<import("../Meta/Data/DataSync.types.js").ChunkSyncData, import("../Meta/Data/DataSync.types.js").ChunkUnSyncData>;
        voxelPalette: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<import("../Meta/Data/DataSync.types.js").VoxelPaletteSyncData, any>;
        voxelData: import("../Libs/ThreadComm/Data/DataSync.js").DataSync<import("../Meta/Data/DataSync.types.js").VoxelDataSync, any>;
    };
    data: {
        dimensions: {
            dimensionRecord: Record<string, number>;
            dimensionMap: Record<number, string>;
            __defaultDimensionOptions: import("../Meta/Data/DimensionData.types.js").DimensionOptions;
            _dimensions: Record<string, import("../Meta/Data/DimensionData.types.js").DimensionData>;
            addDimension(id: string, option: import("../Meta/Data/DimensionData.types.js").DimensionOptions): void;
            getDimension(id: string): import("../Meta/Data/DimensionData.types.js").DimensionData;
            getDimensionStringId(id: string | number): string;
            getDimensionNumericId(id: string | number): number;
        };
        voxel: {
            byteLength: {
                substance: number;
                shapeId: number;
                hardness: number;
                material: number;
                checkCollision: number;
                colliderId: number;
                lightSource: number;
                lightValue: number;
                totalLength: number;
            };
            indexes: {
                substance: number;
                shapeId: number;
                hardness: number;
                material: number;
                checkCollision: number;
                colliderId: number;
                lightSource: number;
                lightValue: number;
            };
            substanceRecord: Record<number, import("Meta/index.js").VoxelSubstanceType>;
            voxelData: {
                substance: import("Meta/index.js").VoxelSubstanceType;
                shapeId: number;
                hardness: number;
                material: number;
                checkCollision: number;
                colliderId: number;
                lightSource: number;
                lightValue: number;
            };
            voxelDataView: DataView;
            voxelMap: Uint16Array;
            syncData(voxelBuffer: SharedArrayBuffer, voxelMapBuffer: SharedArrayBuffer): void;
            getVoxelData(id: number): {
                substance: import("Meta/index.js").VoxelSubstanceType;
                shapeId: number;
                hardness: number;
                material: number;
                checkCollision: number;
                colliderId: number;
                lightSource: number;
                lightValue: number;
            };
            getSubstance(id: number): number;
            getTrueSubstance(id: number): import("Meta/index.js").VoxelSubstanceType;
            getShapeId(id: number): number;
            getHardness(id: number): number;
            getCheckCollisions(id: number): number;
            getColliderId(id: number): number;
            isLightSource(id: number): boolean;
            getLightValue(id: number): number;
        };
        world: {
            _currentionDimension: string;
            voxelPalette: import("../Meta/Data/WorldData.types.js").VoxelPalette;
            voxelPaletteMap: import("../Meta/Data/WorldData.types.js").VoxelPaletteMap;
            setCurrentDimension(id: string | number): void;
            setVoxelPalette(voxelPalette: import("../Meta/Data/WorldData.types.js").VoxelPalette, voxelPaletteMap: import("../Meta/Data/WorldData.types.js").VoxelPaletteMap): void;
            rawData: {
                get(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                set(dimensionId: string | number, x: number, y: number, z: number, data: number, secondary?: boolean): number;
            };
            util: {
                isSameVoxel(dimensionId: string | number, x: number, y: number, z: number, x2: number, y2: number, z2: number, secondary?: boolean): boolean;
            };
            voxel: {
                _air: [string, number];
                _barrier: [string, number];
                air: {
                    isAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): true | undefined;
                    set(dimensionId: string | number, x: number, y: number, z: number, light?: number, secondary?: boolean): void;
                };
                barrier: {
                    isAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): true | undefined;
                    set(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): void;
                };
                get(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): false | [string, number];
                getData(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): false | {
                    substance: import("Meta/index.js").VoxelSubstanceType;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                };
                id: {
                    string(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): string | -1;
                    stateNumeric(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                    baseNumeric(id: number): number;
                    baseNumericAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                    stringFromNumber(id: number): string;
                    numberFromString(id: string): number;
                    getPaletteId(voxelId: string, voxelState: number): number;
                };
                data: {
                    shapeId: {
                        getAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                        get(id: number): number;
                    };
                    substance: {
                        getAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): import("Meta/index.js").VoxelSubstanceType;
                        get(id: number): import("Meta/index.js").VoxelSubstanceType;
                    };
                    shapeState: {
                        getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                        get(data: number): number;
                        set(data: number, state: number): number;
                        setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                    };
                    state: {
                        getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                        get(data: number): number;
                        set(data: number, state: number): number;
                        setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                    };
                    lightSource: {
                        trueAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): boolean;
                        true(voxelId: number): boolean;
                    };
                    level: {
                        getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                        get(data: number): number;
                        set(data: number, level: number): number;
                        setAt(dimensionId: string | number, x: number, y: number, z: number, level: number): void;
                        state: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                            get(data: number): number;
                            set(data: number, level: number): number;
                            setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                        };
                    };
                };
            };
            heightMap: {
                update: {
                    add(dimensionId: string | number, substance: import("Meta/index.js").VoxelSubstanceType, x: number, y: number, z: number): void;
                    remove(dimensionId: string | number, substance: import("Meta/index.js").VoxelSubstanceType, x: number, y: number, z: number): void;
                };
            };
            paint: {
                getVoxelBrush(): void;
                voxel(data: import("../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): void;
                voxelAsync(data: import("../Meta/Data/WorldData.types.js").AddVoxelData): Promise<void>;
                __paint(dimension: string | number, data: import("../Meta/Data/WorldData.types.js").AddVoxelData, chunk: import("../Meta/Data/WorldData.types.js").ChunkData, update?: boolean): false | undefined;
                erease(dimensionId: string | number, x: number, y: number, z: number): void;
                _worldGen: {
                    getPaletteId(voxelId: string, voxelState: number): number;
                };
            };
            light: {
                get(dimesnionId: string | number, x: number, y: number, z: number): number;
                set(dimesnionId: string | number, x: number, y: number, z: number, lightValue: number): -1 | undefined;
                red: {
                    get(dimesnionId: string | number, x: number, y: number, z: number): number;
                    set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                };
                green: {
                    get(dimesnionId: string | number, x: number, y: number, z: number): number;
                    set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                };
                blue: {
                    get(dimesnionId: string | number, x: number, y: number, z: number): number;
                    set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                };
                sun: {
                    get(dimesnionId: string | number, x: number, y: number, z: number): number;
                    set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                };
            };
        };
        worldRegister: {
            dimensionRecord: Record<string, number>;
            dimensionMap: Record<number, string>;
            _dimensions: import("../Meta/Data/WorldData.types.js").WorldDimensions;
            _cacheOn: boolean;
            _cache: Record<string, import("../Meta/Data/WorldData.types.js").ChunkData>;
            cache: {
                enable(): void;
                disable(): void;
                _add(key: string, data: import("../Meta/Data/WorldData.types.js").ChunkData): void;
                _get(key: string): import("../Meta/Data/WorldData.types.js").ChunkData;
            };
            dimensions: {
                add(id: string | number): {};
                get(id: string | number): Record<string, import("../Meta/Data/WorldData.types.js").Region>;
            };
            region: {
                add(dimensionId: string | number, x: number, y: number, z: number): import("../Meta/Data/WorldData.types.js").Region;
                get(dimensionId: string | number, x: number, y: number, z: number): false | import("../Meta/Data/WorldData.types.js").Region;
            };
            column: {
                add(dimensionId: string | number, x: number, z: number, y?: number): import("../Meta/Data/WorldData.types.js").Column;
                get(dimensionId: string | number, x: number, z: number, y?: number): false | import("../Meta/Data/WorldData.types.js").Column;
                fill(dimensionId: string | number, x: number, z: number, y?: number): void;
                height: {
                    getRelative(dimensionId: string | number, x: number, z: number, y?: number): number;
                    getAbsolute(dimensionId: string | number, x: number, z: number, y?: number): number;
                };
            };
            chunk: {
                add(dimensionId: string | number, x: number, y: number, z: number, sab: SharedArrayBuffer): import("../Meta/Data/WorldData.types.js").ChunkData;
                get(dimensionId: string | number, x: number, y: number, z: number): false | import("../Meta/Data/WorldData.types.js").ChunkData;
            };
        };
        worldColumn: {};
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
            getChunkKey(chunkPOS: import("Meta/index.js").Position3Matrix): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("Meta/index.js").Position3Matrix): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("Meta/index.js").Position3Matrix): {
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
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
        };
        maps: {
            voxels: {
                substanceMap: Record<import("Meta/index.js").VoxelSubstanceType, number>;
                substanceRecord: Record<number, import("Meta/index.js").VoxelSubstanceType>;
                byteLengths: {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                    totalLength: number;
                };
                dataIndexes: {
                    substance: number;
                    shapeId: number;
                    hardness: number;
                    material: number;
                    checkCollision: number;
                    colliderId: number;
                    lightSource: number;
                    lightValue: number;
                };
            };
        };
        chunks: {
            reader: {
                chunkByteSize: number;
                indexSizes: {
                    header: number;
                    states: number;
                    position: number;
                    minMax: number;
                    heightMap: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                indexes: {
                    header: number;
                    states: number;
                    position: number;
                    minMax: number;
                    heightMap: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                byteLengths: {
                    heightMapData: number;
                    voxelData: number;
                    voxelStateData: number;
                };
                syncSettings(): void;
                _getVoxelDataIndex(x: number, y: number, z: number): number;
                _getVoxelStateDataIndex(x: number, y: number, z: number): number;
                _chunkPositon: {
                    x: number;
                    y: number;
                    z: number;
                };
                getChunkPosition(chunk: DataView): {
                    x: number;
                    y: number;
                    z: number;
                };
                setChunkPosition(chunk: DataView, position: import("Meta/index.js").Position3Matrix): void;
                getVoxelChunkDataIndex(x: number, y: number, z: number, secondary?: boolean): number;
                hmBounds: {
                    x: number;
                    y: number;
                    z: number;
                };
                _getHeightMapIndex(x: number, y: number, z: number): number;
                getHeightMapIndex(x: number, y: number, z: number): number;
                getVoxelData(chunkData: import("../Meta/Data/WorldData.types.js").ChunkData, x: number, y: number, z: number, secondary?: boolean): number;
                setVoxelData(chunkData: import("../Meta/Data/WorldData.types.js").ChunkData, x: number, y: number, z: number, data: number, secondary?: boolean): number;
                getVoxelDataUseObj(chunkData: import("../Meta/Data/WorldData.types.js").ChunkData, position: import("Meta/index.js").Position3Matrix, secondary?: boolean): number;
                setVoxelDataUseObj(chunkData: import("../Meta/Data/WorldData.types.js").ChunkData, position: import("Meta/index.js").Position3Matrix, data: number, secondary?: boolean): number;
                getHeightMapData(chunkData: DataView, x: number, y: number, z: number): number;
                setHeightMapData(chunkData: DataView, x: number, y: number, z: number, data: number): void;
                getChunkMinData(chunkData: DataView): number;
                setChunkMinData(chunkData: DataView, data: number): void;
                getChunkMaxData(chunkData: DataView): number;
                setChunkMaxData(chunkData: DataView, data: number): void;
            };
            heightMap: {
                _getHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (byteData: number) => number>;
                _setHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (height: number, byteData: number) => number>;
                _markSubstanceAsNotExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _markSubstanceAsExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _isSubstanceExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => boolean>;
                getStartingHeightMapValue(): number;
                initalizeChunk(chunkData: DataView): void;
                updateChunkMinMax(voxelPOS: import("Meta/index.js").Position3Matrix, chunkData: DataView): void;
                getChunkMin(chunkData: DataView): number;
                getChunkMax(chunkData: DataView): number;
                calculateHeightRemoveDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: DataView): boolean | undefined;
                calculateHeightAddDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getLowestExposedVoxel(x: number, z: number, chunk: DataView): number;
                getHighestExposedVoxel(x: number, z: number, chunk: DataView): number;
                isSubstanceExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): boolean;
                markSubstanceAsExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                markSubstanceAsNotExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                setMinYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMinYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
                setMaxYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMaxYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
            };
            state: {
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
                    setPositionUseObj(positionObj: import("Meta/index.js").Position3Matrix): number;
                };
                indexes: {
                    states: number;
                    minHeight: number;
                    maxHeight: number;
                    voxelCount1: number;
                    voxelCount2: number;
                    voxelCount3: number;
                };
                _chunkStates: {
                    empty: boolean;
                    worldGenDone: boolean;
                    sunLightDone: boolean;
                    RGBLightDone: boolean;
                    fluidDone: boolean;
                    magmaDone: boolean;
                };
                _chunkStateMask: {
                    empty: number;
                    emptyIndex: number;
                    worldGenDone: number;
                    worldGenIndex: number;
                    sunLightDone: number;
                    sunLightIndex: number;
                    RGBLightDone: number;
                    RGBLightIndex: number;
                    fluidDone: number;
                    fluidIndex: number;
                    magmaDone: number;
                    magmaIndex: number;
                };
                updateChunkMinMax(voxelPOS: import("Meta/index.js").Position3Matrix, chunkStatesData: Uint32Array): void;
                getChunkMin(chunkStatesData: Uint32Array): number;
                getChunkMax(chunkStatesData: Uint32Array): number;
                isEmpty(chunkStatesData: Uint32Array): boolean;
                isWorldGenDone(chunkStatesData: Uint32Array): boolean;
                isSunLightUpdatesDone(chunkStatesData: Uint32Array): boolean;
                isRGBLightUpdatesDone(chunkStatesData: Uint32Array): boolean;
                isFluidFlowDone(chunkStatesData: Uint32Array): boolean;
                isMagmaFlowDone(chunkStatesData: Uint32Array): boolean;
                getFullChunkStates(chunkStatesData: Uint32Array): {
                    empty: boolean;
                    worldGenDone: boolean;
                    sunLightDone: boolean;
                    RGBLightDone: boolean;
                    fluidDone: boolean;
                    magmaDone: boolean;
                };
                addToVoxelCount(voxelSubstance: import("Meta/index.js").VoxelSubstanceType, chunkStatesData: Uint32Array): void;
                subtractFromVoxelCount(voxelSubstance: import("Meta/index.js").VoxelSubstanceType, chunkStatesData: Uint32Array): void;
                getTotalVoxels(chunkStatesData: Uint32Array): void;
                getTotalVoxelsOfASubstance(voxelSubstance: import("Meta/index.js").VoxelSubstanceType, chunkStatesData: Uint32Array): void;
            };
        };
    };
    DVEB: {
        textureManager: {
            textureDataHasBeenSet: boolean;
            uvTextureMap: Record<import("Meta/index.js").TextureTypes, Record<string, number>>;
            overlayUVTextureMap: Record<import("Meta/index.js").TextureTypes, Record<string, number>>;
            getTextureUV(textureType: import("Meta/index.js").TextureTypes, textureId: string, varation?: string | false | null, overlay?: boolean): number;
            setUVTextureMap(data: Record<import("Meta/index.js").TextureTypes, Record<string, number>>): void;
            setOverlayUVTextureMap(data: Record<import("Meta/index.js").TextureTypes, Record<string, number>>): void;
            releaseTextureData(): void;
            isReady(): boolean;
        };
        shapeManager: {
            shapes: Record<number, import("Meta/index.js").VoxelShapeInterface>;
            shapeMap: Record<string, number>;
            shapeCount: number;
            registerShape(shapeObject: import("Meta/index.js").VoxelShapeInterface): void;
            getShape(shapeId: number): import("Meta/index.js").VoxelShapeInterface;
            getShapeId(shapeId: string): number;
            getShapeMap(): Record<string, number>;
        };
        shapeHelper: {
            faceByte: {
                _rotationMap: Record<import("../Meta/Constructor/Mesher.types.js").Rotations, number>;
                _rotationReverseMap: Record<number, import("../Meta/Constructor/Mesher.types.js").Rotations>;
                _setFaceTextureState: Record<import("Meta/index.js").DirectionNames, (state: number, faceBit: number) => number>;
                _getFaceTextureState: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _setFaceRotateState: Record<import("Meta/index.js").DirectionNames, (state: number, faceBit: number) => number>;
                _getFaceRotateState: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _markExposedFace: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _checkExposedFace: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => boolean>;
                markFaceAsExposed(direction: import("Meta/index.js").DirectionNames, rawData: number): number;
                isFaceExposed(direction: import("Meta/index.js").DirectionNames, rawData: number): boolean;
                setFaceRotateState(direction: import("Meta/index.js").DirectionNames, state: number, rawData: number): number;
                getFaceRotateState(direction: import("Meta/index.js").DirectionNames, rawData: number): number;
                setFaceTextureState(direction: import("Meta/index.js").DirectionNames, rotation: import("../Meta/Constructor/Mesher.types.js").Rotations, rawData: number): number;
                getFaceTextureState(direction: import("Meta/index.js").DirectionNames, rawData: number): import("../Meta/Constructor/Mesher.types.js").Rotations;
            };
            lightByte: {
                SRS: number;
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
                getRGB(sl: number): number;
                setRGB(value: number, sl: number): number;
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
                minusOneForAll(sl: number): number;
            };
            meshFaceData: {
                setAnimationType(animationType: number, rawData: number): number;
                getAnimationType(rawData: number): number;
            };
            lightMap: number[];
            shouldFaceFlip(faceBit: number, faceDirection: import("Meta/index.js").DirectionNames): boolean;
            getTextureRotation(faceBit: number, faceDirection: import("Meta/index.js").DirectionNames): import("../Meta/Constructor/Mesher.types.js").Rotations;
            isFaceExposexd(faceBit: number, faceDirection: import("Meta/index.js").DirectionNames): boolean;
            produceShapeReturnData(shapeData: import("Meta/index.js").VoxelShapeAddData): import("Meta/index.js").VoxelShapeAddReturnData;
            toLinearSpace(r: number, g: number, b: number, a: number): number[];
            addFaceData(faceData: number, faceDataArray: number[]): void;
            calculateLightColor(RGBlightColors: number[], sunlightColors: number[], lightTemplate: number[], startIndex: number): void;
            calculateLightColorFromValue(RGBlightColors: number[], sunlightColors: number[], lightValue: number): void;
            calculateSunightColor(sunLight: number[], sunLightTemplate: number[], sunLightIndex: number): void;
            calculateAOColor(aoColors: number[], aoTemplate: number[], aoTemplateIndex: number): void;
            calculateAOColorFromValue(aoColors: number[], aoValue: number): void;
        };
        shapeBuilder: {
            faceFunctions: Record<import("Meta/index.js").DirectionNames, (origin: import("Meta/index.js").Position3Matrix, dimensions: {
                width: number;
                height: number;
                depth: number;
            }, data: import("Meta/index.js").VoxelShapeAddData | import("../Meta/Constructor/ItemShape.type.js").CreateItemData, transform: {
                v1: {
                    x: number;
                    y: number;
                    z: number;
                };
                v2: {
                    x: number;
                    y: number;
                    z: number;
                };
                v3: {
                    x: number;
                    y: number;
                    z: number;
                };
                v4: {
                    x: number;
                    y: number;
                    z: number;
                };
            }, flip?: boolean | undefined) => void>;
            addFace(direction: import("Meta/index.js").DirectionNames, origin: import("Meta/index.js").Position3Matrix, dimensions: {
                width: number;
                height: number;
                depth: number;
            }, data: import("Meta/index.js").VoxelShapeAddData | import("../Meta/Constructor/ItemShape.type.js").CreateItemData, flip?: boolean, transform?: {
                v1: {
                    x: number;
                    y: number;
                    z: number;
                };
                v2: {
                    x: number;
                    y: number;
                    z: number;
                };
                v3: {
                    x: number;
                    y: number;
                    z: number;
                };
                v4: {
                    x: number;
                    y: number;
                    z: number;
                };
            }): void;
        };
        uvHelper: {
            uvRotations: Record<"top" | "bottom" | "side", Record<import("../Meta/Constructor/Mesher.types.js").Rotations, (uv: number, ws: number, we: number, hs: number, he: number, flipped: boolean, uvs: number[]) => void>>;
            advancedUVs: Record<"top" | "bottom" | "side", (uv: number, ws1: number, ws2: number, we1: number, we2: number, hs1: number, hs2: number, he1: number, he2: number, uvs: number[]) => void>;
            uvFunctions: Record<import("Meta/index.js").DirectionNames, (data: import("../Meta/Constructor/Mesher.types.js").UVFunctionData) => void>;
            addUVs(face: import("Meta/index.js").DirectionNames, data: import("../Meta/Constructor/Mesher.types.js").UVFunctionData): void;
            addAdvancedUVs(uv: number, uvs: number, ws1: number, ws2: number, we1: number, we2: number, hs1: number, hs2: number, he1: number, he2: number): void;
            processOverlayUVs(data: import("Meta/index.js").VoxelShapeAddData): void;
        };
        chunkMesher: {
            voxelBuildOrder: import("Meta/index.js").VoxelTemplateSubstanceType[];
            voxelTypeMap: {
                solid: number;
                flora: number;
                fluid: number;
                magma: number;
            };
            buildChunkMesh(chunkX: number, chunkY: number, chunkZ: number, template: import("../Meta/Constructor/ChunkTemplate.types.js").FullChunkTemplate, LOD?: number): void;
        };
        entityMesher: {
            buildEntityMesh(x: number, y: number, z: number, template: import("../Meta/Constructor/ChunkTemplate.types.js").ChunkTemplate): void;
        };
        itemMesher: {
            createItem(itemId: string, x: number, y: number, z: number): void;
        };
        processor: {
            LOD: number;
            mDataTool: import("../Tools/Data/DataTool.js").DataTool;
            nDataTool: import("../Tools/Data/DataTool.js").DataTool;
            heightByte: {
                _getHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (byteData: number) => number>;
                _setHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (height: number, byteData: number) => number>;
                _markSubstanceAsNotExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _markSubstanceAsExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
                _isSubstanceExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => boolean>;
                getStartingHeightMapValue(): number;
                initalizeChunk(chunkData: DataView): void;
                updateChunkMinMax(voxelPOS: import("Meta/index.js").Position3Matrix, chunkData: DataView): void;
                getChunkMin(chunkData: DataView): number;
                getChunkMax(chunkData: DataView): number;
                calculateHeightRemoveDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: DataView): boolean | undefined;
                calculateHeightAddDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getLowestExposedVoxel(x: number, z: number, chunk: DataView): number;
                getHighestExposedVoxel(x: number, z: number, chunk: DataView): number;
                isSubstanceExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): boolean;
                markSubstanceAsExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                markSubstanceAsNotExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                setMinYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMinYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
                setMaxYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
                getMaxYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
            };
            faceByte: {
                _rotationMap: Record<import("../Meta/Constructor/Mesher.types.js").Rotations, number>;
                _rotationReverseMap: Record<number, import("../Meta/Constructor/Mesher.types.js").Rotations>;
                _setFaceTextureState: Record<import("Meta/index.js").DirectionNames, (state: number, faceBit: number) => number>;
                _getFaceTextureState: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _setFaceRotateState: Record<import("Meta/index.js").DirectionNames, (state: number, faceBit: number) => number>;
                _getFaceRotateState: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _markExposedFace: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => number>;
                _checkExposedFace: Record<import("Meta/index.js").DirectionNames, (faceBit: number) => boolean>;
                markFaceAsExposed(direction: import("Meta/index.js").DirectionNames, rawData: number): number;
                isFaceExposed(direction: import("Meta/index.js").DirectionNames, rawData: number): boolean;
                setFaceRotateState(direction: import("Meta/index.js").DirectionNames, state: number, rawData: number): number;
                getFaceRotateState(direction: import("Meta/index.js").DirectionNames, rawData: number): number;
                setFaceTextureState(direction: import("Meta/index.js").DirectionNames, rotation: import("../Meta/Constructor/Mesher.types.js").Rotations, rawData: number): number;
                getFaceTextureState(direction: import("Meta/index.js").DirectionNames, rawData: number): import("../Meta/Constructor/Mesher.types.js").Rotations;
            };
            lightByte: {
                SRS: number;
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
                getRGB(sl: number): number;
                setRGB(value: number, sl: number): number;
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
                minusOneForAll(sl: number): number;
            };
            worldData: {
                _currentionDimension: string;
                voxelPalette: import("../Meta/Data/WorldData.types.js").VoxelPalette;
                voxelPaletteMap: import("../Meta/Data/WorldData.types.js").VoxelPaletteMap;
                setCurrentDimension(id: string | number): void;
                setVoxelPalette(voxelPalette: import("../Meta/Data/WorldData.types.js").VoxelPalette, voxelPaletteMap: import("../Meta/Data/WorldData.types.js").VoxelPaletteMap): void;
                rawData: {
                    get(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                    set(dimensionId: string | number, x: number, y: number, z: number, data: number, secondary?: boolean): number;
                };
                util: {
                    isSameVoxel(dimensionId: string | number, x: number, y: number, z: number, x2: number, y2: number, z2: number, secondary?: boolean): boolean;
                };
                voxel: {
                    _air: [string, number];
                    _barrier: [string, number];
                    air: {
                        isAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): true | undefined;
                        set(dimensionId: string | number, x: number, y: number, z: number, light?: number, secondary?: boolean): void;
                    };
                    barrier: {
                        isAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): true | undefined;
                        set(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): void;
                    };
                    get(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): false | [string, number];
                    getData(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): false | {
                        substance: import("Meta/index.js").VoxelSubstanceType;
                        shapeId: number;
                        hardness: number;
                        material: number;
                        checkCollision: number;
                        colliderId: number;
                        lightSource: number;
                        lightValue: number;
                    };
                    id: {
                        string(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): string | -1;
                        stateNumeric(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                        baseNumeric(id: number): number;
                        baseNumericAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                        stringFromNumber(id: number): string;
                        numberFromString(id: string): number;
                        getPaletteId(voxelId: string, voxelState: number): number;
                    };
                    data: {
                        shapeId: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): number;
                            get(id: number): number;
                        };
                        substance: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): import("Meta/index.js").VoxelSubstanceType;
                            get(id: number): import("Meta/index.js").VoxelSubstanceType;
                        };
                        shapeState: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                            get(data: number): number;
                            set(data: number, state: number): number;
                            setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                        };
                        state: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                            get(data: number): number;
                            set(data: number, state: number): number;
                            setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                        };
                        lightSource: {
                            trueAt(dimensionId: string | number, x: number, y: number, z: number, secondary?: boolean): boolean;
                            true(voxelId: number): boolean;
                        };
                        level: {
                            getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                            get(data: number): number;
                            set(data: number, level: number): number;
                            setAt(dimensionId: string | number, x: number, y: number, z: number, level: number): void;
                            state: {
                                getAt(dimensionId: string | number, x: number, y: number, z: number): number;
                                get(data: number): number;
                                set(data: number, level: number): number;
                                setAt(dimensionId: string | number, x: number, y: number, z: number, state: number): void;
                            };
                        };
                    };
                };
                heightMap: {
                    update: {
                        add(dimensionId: string | number, substance: import("Meta/index.js").VoxelSubstanceType, x: number, y: number, z: number): void;
                        remove(dimensionId: string | number, substance: import("Meta/index.js").VoxelSubstanceType, x: number, y: number, z: number): void;
                    };
                };
                paint: {
                    getVoxelBrush(): void;
                    voxel(data: import("../Meta/Data/WorldData.types.js").AddVoxelData, update?: boolean): void;
                    voxelAsync(data: import("../Meta/Data/WorldData.types.js").AddVoxelData): Promise<void>;
                    __paint(dimension: string | number, data: import("../Meta/Data/WorldData.types.js").AddVoxelData, chunk: import("../Meta/Data/WorldData.types.js").ChunkData, update?: boolean): false | undefined;
                    erease(dimensionId: string | number, x: number, y: number, z: number): void;
                    _worldGen: {
                        getPaletteId(voxelId: string, voxelState: number): number;
                    };
                };
                light: {
                    get(dimesnionId: string | number, x: number, y: number, z: number): number;
                    set(dimesnionId: string | number, x: number, y: number, z: number, lightValue: number): -1 | undefined;
                    red: {
                        get(dimesnionId: string | number, x: number, y: number, z: number): number;
                        set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                    };
                    green: {
                        get(dimesnionId: string | number, x: number, y: number, z: number): number;
                        set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                    };
                    blue: {
                        get(dimesnionId: string | number, x: number, y: number, z: number): number;
                        set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                    };
                    sun: {
                        get(dimesnionId: string | number, x: number, y: number, z: number): number;
                        set(dimesnionId: string | number, x: number, y: number, z: number, value: number): 0 | undefined;
                    };
                };
            };
            calculatFlow: typeof import("./Builder/Processor/Functions/CalculateFlow.js").CalculateFlow;
            voxellightMixCalc: typeof import("./Builder/Processor/Functions/CalculateVoxelLight.js").VoxelLightMixCalc;
            doVoxelLight: typeof import("./Builder/Processor/Functions/CalculateVoxelLight.js").CalculateVoxelLight;
            chunkTemplates: Record<number, Record<number, number[][]>>;
            exposedFaces: number[];
            faceStates: number[];
            textureRotation: import("../Meta/Constructor/Mesher.types.js").Rotations[];
            settings: {
                doAO: boolean;
                doSun: boolean;
                doRGB: boolean;
                ignoreSun: boolean;
                entity: boolean;
                composedEntity: number;
            };
            voxelProcesseData: import("../Meta/Constructor/Voxel.types.js").VoxelProcessData;
            cullFaceOverrideData: any;
            aoOverRideData: any;
            template: import("../Meta/Constructor/ChunkTemplate.types.js").FullChunkTemplate;
            faceIndexMap: Record<import("Meta/index.js").DirectionNames, number>;
            dimension: number;
            $INIT(): void;
            cullCheck(face: import("Meta/index.js").DirectionNames, voxelId: string, voxelShapeId: number, voxelSubstance: import("Meta/index.js").VoxelSubstanceType, shapeState: number, x: number, y: number, z: number, faceBit: number): number;
            faceStateCheck(face: import("Meta/index.js").DirectionNames, faceBit: number): number;
            _process(template: import("../Meta/Constructor/ChunkTemplate.types.js").FullChunkTemplate, x: number, y: number, z: number, doSecondCheck?: boolean): void;
            constructEntity(composed?: number): import("../Meta/Constructor/ChunkTemplate.types.js").FullChunkTemplate;
            makeAllChunkTemplates(chunk: import("../Meta/Data/WorldData.types.js").ChunkData, chunkX: number, chunkY: number, chunkZ: number, LOD?: number): import("../Meta/Constructor/ChunkTemplate.types.js").FullChunkTemplate;
            processVoxelLight(data: import("../Meta/Constructor/Voxel.types.js").VoxelProcessData, ignoreAO?: boolean): void;
            syncSettings(settings: EngineSettingsData): void;
            flush(): void;
        };
        voxelHelper: {
            substanceMap: Record<import("Meta/index.js").VoxelSubstanceType, number>;
            substanceRules: Record<string, boolean>;
            ruleMap: Record<number, boolean>;
            $INIT(): void;
            substanceRuleCheck(voxel: import("Meta/index.js").VoxelSubstanceType, neightborVoxel: import("Meta/index.js").VoxelSubstanceType): boolean;
        };
        entityConstructor: {
            voxelData: Uint32Array[];
            _3dArray: {
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
                getValue(x: number, y: number, z: number, array: number[] | Uint32Array): number;
                getValueUseObj(position: import("Meta/index.js").Position3Matrix, array: number[] | Uint32Array): number;
                getValueUseObjSafe(position: import("Meta/index.js").Position3Matrix, array: number[] | Uint32Array): number;
                setValue(x: number, y: number, z: number, array: number[] | Uint32Array, value: number): void;
                setValueUseObj(position: import("Meta/index.js").Position3Matrix, array: number[] | Uint32Array, value: number): void;
                setValueUseObjSafe(position: import("Meta/index.js").Position3Matrix, array: number[] | Uint32Array, value: number): void;
                deleteValue(x: number, y: number, z: number, array: number[] | Uint32Array): void;
                deleteUseObj(position: import("Meta/index.js").Position3Matrix, array: number[] | Uint32Array): void;
                getIndex(x: number, y: number, z: number): number;
                getXYZ(index: number): import("Meta/index.js").Position3Matrix;
            };
            voxelReader: {
                setId(id: number, value: number): number;
                getId(value: number): number;
                getLight(voxelData: number): number;
                setLight(voxelData: number, encodedLight: number): number;
                getLevel(stateData: number): number;
                setLevel(stateData: number, level: number): number;
                getLevelState(stateData: number): number;
                setLevelState(stateData: number, levelState: number): number;
                getShapeState(voxelData: number): number;
                setShapeState(voxelData: number, shapeState: number): number;
            };
            lightByte: {
                SRS: number;
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
                getRGB(sl: number): number;
                setRGB(value: number, sl: number): number;
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
                minusOneForAll(sl: number): number;
            };
            pos: {
                x: number;
                y: number;
                z: number;
            };
            totalComposed: number;
            width: number;
            depth: number;
            height: number;
            setEntityData(x: number, y: number, z: number, width: number, height: number, depth: number, composed: number, voxelData: Uint32Array[]): void;
            getVoxel(x: number, y: number, z: number, composed?: number): false | [string, number];
            getLevel(x: number, y: number, z: number, composed?: number): number;
            getLevelState(x: number, y: number, z: number, composed?: number): number;
            getShapeState(x: number, y: number, z: number, composed?: number): number;
            getLight(x: number, y: number, z: number, composed?: number): number;
            clearEntityData(): void;
        };
        dimension: number;
        $INIT(): Promise<void>;
        syncSettings(settings: EngineSettingsData): void;
        buildChunk(dimension: string | number, chunkX: number, chunkY: number, chunkZ: number, LOD?: number): Promise<true | undefined>;
        constructEntity(): void;
    };
    DVEP: {
        illumination: {
            lightData: {
                SRS: number;
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
                getRGB(sl: number): number;
                setRGB(value: number, sl: number): number;
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
                minusOneForAll(sl: number): number;
            };
            air: number[];
            dimension: number;
            runSunLightUpdateAt: typeof import("./Propagation/Illumanation/Functions/SunLight.js").runSunLightUpdateAt;
            runSunLightUpdate: typeof import("./Propagation/Illumanation/Functions/SunLight.js").runSunLightUpdate;
            runSunLightRemove: typeof import("./Propagation/Illumanation/Functions/SunLight.js").runSunLightRemove;
            runSunLightRemoveAt: typeof import("./Propagation/Illumanation/Functions/SunLight.js").runSunLightRemoveAt;
            populateWorldColumnWithSunLight: typeof import("./Propagation/Illumanation/Functions/SunLight.js").PopulateWorldColumnWithSunLight;
            runSunLightUpdateAtMaxY: typeof import("./Propagation/Illumanation/Functions/SunLight.js").RunSunLightUpdateAtMaxY;
            runSunLightFloodDown: typeof import("./Propagation/Illumanation/Functions/SunLight.js").RunSunLightFloodDown;
            runSunLightFloodOut: typeof import("./Propagation/Illumanation/Functions/SunLight.js").RunSunLightFloodOut;
            sunLightAboveCheck: typeof import("./Propagation/Illumanation/Functions/SunLight.js").SunLightAboveCheck;
            _sunLightUpdateQue: import("../Global/Util/Queue.js").Queue<number[]>;
            _sunLightFloodDownQue: import("../Global/Util/Queue.js").Queue<number[]>;
            _sunLightFloodOutQue: Record<string, import("../Global/Util/Queue.js").Queue<number[]>>;
            _sunLightRemoveQue: number[][];
            runRGBFloodFillAt: typeof import("./Propagation/Illumanation/Functions/RGBFloodLight.js").runRGBFloodFillAt;
            runRGBFloodFill: typeof import("./Propagation/Illumanation/Functions/RGBFloodLight.js").runRGBFloodFill;
            runRGBFloodRemoveAt: typeof import("./Propagation/Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemoveAt;
            runRGBFloodRemove: typeof import("./Propagation/Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemove;
            _RGBlightUpdateQue: number[][];
            _RGBlightRemovalQue: number[][];
            _visitMap: Record<string, boolean>;
            _sDataTool: import("../Tools/Data/DataTool.js").DataTool;
            _nDataTool: import("../Tools/Data/DataTool.js").DataTool;
        };
        flow: {
            lightData: {
                SRS: number;
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
                getRGB(sl: number): number;
                setRGB(value: number, sl: number): number;
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
                minusOneForAll(sl: number): number;
            };
            dimension: number;
            currentVoxel: number;
            _visitedMap: Record<string, boolean>;
            _flowQue: number[][];
            _flowRemoveQue: number[][];
            _brush: import("../Tools/Brush/Brush.js").VoxelBrush;
            _sDataTool: import("../Tools/Data/DataTool.js").DataTool;
            _nDataTool: import("../Tools/Data/DataTool.js").DataTool;
            runRemovePropagation: typeof import("./Propagation/Flow/Functions/RunFlowRemove.js").RunRemovePropagation;
            runFlowReduce: typeof import("./Propagation/Flow/Functions/RunFlowRemove.js").RunFlowReduce;
            runFlowRemove: typeof import("./Propagation/Flow/Functions/RunFlowRemove.js").RunFlowRemove;
            runFlow: typeof import("./Propagation/Flow/Functions/RunFlow.js").RunFlow;
            runFlowNoChunkRebuild: typeof import("./Propagation/Flow/Functions/RunFlowNoChunkBuild.js").RunFlowNoChunkBuild;
            runFlowIncrease: typeof import("./Propagation/Flow/Functions/RunFlow.js").RunFlowIncrease;
            runFlowPropagation: typeof import("./Propagation/Flow/Functions/RunFlow.js").RunFlowPropagation;
            rebuildQue: number[][];
            rebuildMap: Record<string, boolean>;
            addToMap(x: number, y: number, z: number): void;
            inMap(x: number, y: number, z: number): boolean;
            setVoxel(level: number, levelState: number, x: number, y: number, z: number): void;
            runRemoveCheck(x: number, y: number, z: number): void;
            setCurrentVoxel(x: number, y: number, z: number): boolean;
            runRebuildQue(): void;
            __addToRebuildQue(x: number, y: number, z: number): void;
            resetRebuildQue(): void;
            addToRebuildQue(x: number, y: number, z: number, sync?: boolean): void;
            setLevel(level: number, x: number, y: number, z: number): void;
            removeVoxel(x: number, y: number, z: number): void;
            getLevel(x: number, y: number, z: number): number;
            getLevelState(x: number, y: number, z: number): number;
            canFlowOutwardTest(x: number, y: number, z: number): boolean;
            canFlowDownardTest(x: number, y: number, z: number): boolean;
            flowDownTest(x: number, y: number, z: number): boolean;
            wait(ms: number): Promise<unknown>;
            getAbsorbLight(x: number, y: number, z: number): number;
        };
        rebuildQueMap: Record<string, boolean>;
        $INIT(): void;
        addToRebuildQue(x: number, y: number, z: number, substance: import("Meta/index.js").VoxelSubstanceType | "all"): void;
        resetRebuildQue(): void;
        runRebuildQue(): void;
        runRGBFloodFill(x: number, y: number, z: number): void;
        runRGBFloodRemove(x: number, y: number, z: number): void;
        runSunLightForWorldColumn(x: number, z: number, maxY: number): void;
        runSunFloodFillAtMaxY(x: number, z: number, maxY: number): void;
        runSunFloodFillMaxYFlood(x: number, z: number, maxY: number): void;
        runSunLightUpdate(x: number, y: number, z: number): void;
        runSunLightRemove(x: number, y: number, z: number): void;
        updateFlowAt(x: number, y: number, z: number): Promise<void>;
        removeFlowAt(x: number, y: number, z: number): Promise<void>;
    };
    DVEWG: {
        worldGen: import("../Meta/WorldGen/WorldGen.types.js").WorldGenInterface | null;
        heightByte: {
            _getHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (byteData: number) => number>;
            _setHeightMapData: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (height: number, byteData: number) => number>;
            _markSubstanceAsNotExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
            _markSubstanceAsExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => number>;
            _isSubstanceExposed: Record<import("Meta/index.js").VoxelTemplateSubstanceType, (data: number) => boolean>;
            getStartingHeightMapValue(): number;
            initalizeChunk(chunkData: DataView): void;
            updateChunkMinMax(voxelPOS: import("Meta/index.js").Position3Matrix, chunkData: DataView): void;
            getChunkMin(chunkData: DataView): number;
            getChunkMax(chunkData: DataView): number;
            calculateHeightRemoveDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, heightMap: DataView): boolean | undefined;
            calculateHeightAddDataForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
            getLowestExposedVoxel(x: number, z: number, chunk: DataView): number;
            getHighestExposedVoxel(x: number, z: number, chunk: DataView): number;
            isSubstanceExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): boolean;
            markSubstanceAsExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
            markSubstanceAsNotExposed(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
            setMinYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
            getMinYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
            setMaxYForSubstance(height: number, substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): void;
            getMaxYForSubstance(substance: import("Meta/index.js").VoxelTemplateSubstanceType, x: number, z: number, chunk: DataView): number;
        };
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
            getChunkKey(chunkPOS: import("Meta/index.js").Position3Matrix): string;
            getChunkKeyFromPosition(x: number, y: number, z: number): string;
            getRegionKey(regionPOS: import("Meta/index.js").Position3Matrix): string;
            getRegionKeyFromPosition(x: number, y: number, z: number): string;
            getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: import("Meta/index.js").Position3Matrix): {
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
            getColumnKey(x: number, z: number, y?: number): string;
            getColumnPosition(x: number, z: number, y?: number): {
                x: number;
                z: number;
                y: number;
            };
        };
        setWorldGen(worldGen: import("../Meta/WorldGen/WorldGen.types.js").WorldGenInterface): void;
        generate(x: number, z: number, data: any): Promise<void>;
        __handleHeightMapUpdateForVoxelAdd(voxelPOS: import("Meta/index.js").Position3Matrix, voxelData: import("Meta/index.js").VoxelData, chunk: import("../Meta/Data/WorldData.types.js").ChunkData): void;
        getVoxelPaletteId(voxelId: string, voxelStateId: number): void;
        _paintVoxel(voxelId: string, voxelStateId: number, shapeState: number, x: number, y: number, z: number): void;
        _addToRGBLightUpdateQue(voxelData: import("Meta/index.js").VoxelData, x: number, y: number, z: number): void;
        paintVoxel(voxelId: string, voxelState: number, shapeState: number, x: number, y: number, z: number): Promise<void>;
    };
    tasks: {
        build: {
            chunk: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<import("../Meta/Tasks/Tasks.types.js").BuildTasks>;
            entity: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            item: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
        rgb: {
            update: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            remove: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
        worldSun: {
            fillWorldColumn: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            updateAtMaxY: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            floodAtMaxY: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
        sun: {
            update: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            remove: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
        flow: {
            update: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
            remove: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
        worldGen: {
            generate: import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any[]>;
        };
    };
    parentComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
    worldComm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
    TC: {
        threadNumber: number;
        threadName: string;
        environment: "node" | "browser";
        _comms: Record<string, import("../Libs/ThreadComm/Comm/Comm.js").CommBase>;
        _commManageras: Record<string, import("../Libs/ThreadComm/Manager/CommManager.js").CommManager>;
        _tasks: Record<string, import("../Libs/ThreadComm/Tasks/Tasks.js").Task<any>>;
        _queues: Record<string, import("../Libs/ThreadComm/Queue/SyncedQueue.js").SyncedQueue>;
        _onDataSync: Record<string, import("../Libs/ThreadComm/Data/DataSync.js").DataSync<any, any>>;
        parent: import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        __internal: Record<number, Record<number, (data: any, event: any) => void>>;
        __initalized: boolean;
        __expectedPorts: Record<string, boolean>;
        $INIT(threadName: string): Promise<void>;
        getSyncedQueue(queueId: string): import("../Libs/ThreadComm/Queue/SyncedQueue.js").SyncedQueue;
        addComm(comm: import("../Libs/ThreadComm/Comm/Comm.js").CommBase): void;
        createComm<T_2>(name: string, mergeObject?: T_2): T_2 & import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        createCommManager(data: import("../Libs/ThreadComm/Meta/Manager/Manager.types.js").CommManagerData): import("../Libs/ThreadComm/Manager/CommManager.js").CommManager;
        getComm(id: string): import("../Libs/ThreadComm/Comm/Comm.js").CommBase;
        getCommManager(id: string): import("../Libs/ThreadComm/Manager/CommManager.js").CommManager;
        __throwError(message: string): never;
        getWorkerPort(): Promise<any>;
        __handleInternalMessage(data: any[], event: any): void;
        __isInternalMessage(data: any[]): boolean;
        __handleTasksMessage(data: any[]): Promise<void>;
        __isTasks(data: any[]): boolean;
        registerTasks<T_3>(id: string | number, run: (data: T_3) => void): import("../Libs/ThreadComm/Tasks/Tasks.js").Task<T_3>;
        __hanldeDataSyncMessage(data: any[]): Promise<void>;
        __isDataSync(data: any[]): boolean;
        onDataSync<T_4, K_1>(dataType: string | number, onSync?: ((data: T_4) => void) | undefined, onUnSync?: ((data: K_1) => void) | undefined): import("../Libs/ThreadComm/Data/DataSync.js").DataSync<T_4, K_1>;
    };
    voxelManager: {
        voxelObjects: Record<string, import("Meta/index.js").VoxelConstructorObject>;
        syncShapeData(): Generator<never, void, unknown>;
        getVoxel(id: string): import("Meta/index.js").VoxelConstructorObject;
        registerVoxel(voxel: import("Meta/index.js").VoxelConstructorObject): void;
        runVoxelHookForAll(hook: any): void;
        removeVoxelHookForAll(hook: any): void;
    };
    itemManager: {
        itemObjects: Record<string, import("../Meta/Items/Item.types.js").ItemConstructorObject>;
        itemShapes: Record<string, import("../Meta/Constructor/ItemShape.type.js").ItemShapeData>;
        getItem(id: string): import("../Meta/Items/Item.types.js").ItemConstructorObject;
        registerItem(item: import("../Meta/Items/Item.types.js").ItemConstructorObject): void;
        registerItemShape(shapeData: import("../Meta/Constructor/ItemShape.type.js").ItemShapeData): void;
        getItemShapeData(id: string): import("../Meta/Constructor/ItemShape.type.js").ItemShapeData;
        runItemHookForAll(hook: any): void;
        removeItemHookForAll(hook: any): void;
    };
    syncSettings(data: EngineSettingsData): void;
    reStart(): void;
    isReady(): boolean;
    $INIT(): Promise<void>;
};
export declare type DivineVoxelEngineConstructor = typeof DVEC;
