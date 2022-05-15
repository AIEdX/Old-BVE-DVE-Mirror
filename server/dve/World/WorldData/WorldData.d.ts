import type { ChunkData } from "Meta/Chunks/Chunk.types";
import type { DivineVoxelEngineWorld } from "World/DivineVoxelEngineWorld.js";
import type { InfoByte } from "Global/Util/InfoByte.js";
import type { LightByte } from "Global/Util/LightByte.js";
import type { VoxelData, VoxelSubstanceType } from "Meta/Voxels/Voxel.types.js";
import { VoxelByte } from "Global/Util/VoxelByte.js";
import { WorldRegion } from "Meta/World/WorldData/World.types.js";
import { Flat3DArray } from "Global/Util/Flat3DArray.js";
import type { WorldBounds } from "Global/WorldBounds/WorldBounds.js";
/**# World Data
 * ---
 * Handles all the game worlds data.
 * Also handles getting and setting data.
 */
export declare class WorldData {
    DVEW: DivineVoxelEngineWorld;
    renderDistance: number;
    worldBounds: typeof WorldBounds;
    regionXPow2: number;
    regionZPow2: number;
    regionYPow2: number;
    voxelPaletteFunctions: Record<string, (voxelId: string, voxelStateId: string, chunk: ChunkData, region?: WorldRegion) => number>;
    regions: Record<string, WorldRegion>;
    chunks: Record<string, ChunkData>;
    _RGBLightRemoveQue: number[][];
    _RGBLightUpdateQue: number[][];
    _chunkRebuildQue: number[][];
    _chunkRebuildQueMap: Record<string, Record<VoxelSubstanceType | "all", boolean>>;
    infoByte: typeof InfoByte;
    lightByte: typeof LightByte;
    voxelByte: typeof VoxelByte;
    _3dArray: typeof Flat3DArray;
    substanceRules: Record<string, boolean>;
    lightValueFunctions: {
        r: (value: number) => number;
        g: (value: number) => number;
        b: (value: number) => number;
        s: (value: number) => number;
    };
    constructor(DVEW: DivineVoxelEngineWorld);
    syncChunkBounds(): void;
    getRGBLightUpdateQue(): number[][];
    clearRGBLightUpdateQue(): void;
    getRGBLightRemoveQue(): number[][];
    clearRGBLightRemoveQue(): void;
    getChunkRebuildQue(): number[][];
    getSubstanceNeededToRebuild(chunkX: number, chunkY: number, chunkZ: number): Record<VoxelSubstanceType | "all", boolean>;
    clearChunkRebuildQue(): void;
    addToRebuildQue(x: number, y: number, z: number, substance: "all" | VoxelSubstanceType): void;
    getCurrentWorldDataSize(): number;
    getCurrentWorldDataString(): string;
    setAir(x: number, y: number, z: number, lightValue: number): void;
    setLight(x: number, y: number, z: number, lightValue: number): void;
    /**# Get Light
     * ---
     * Returns the raw light value for a voxel.
     */
    getLight(x: number, y: number, z: number): number;
    /**# Get Light Value
     * ---
     * Returns the value of the light level type for the given voxel at x,y,z.
     */
    getLightValue(x: number, y: number, z: number, type: "r" | "g" | "b" | "s"): number;
    /**# Is Exposed
     * ---
     * Will return true if any face of the voxel is exposed.
     * Must provide the voxel's x,y,z position.
     */
    isVoxelExposed(voxel: VoxelData, voxelData: number, x: number, y: number, z: number): boolean;
    /**# Voxel Face Check
     * ---
     * Determines if a face of a voxel is exposed.
     * You must provide the x,y,z position for the face that is being checked.
     * For instance if you want to check the top face it would be the voxels y plus 1.
     */
    voxelFaceCheck(voxel: VoxelData, voxelData: number, x: number, y: number, z: number): boolean;
    removeData(x: number, y: number, z: number): false | undefined;
    getData(x: number, y: number, z: number): number;
    /**# Set Data
     * ---
     * Sets the data for a specific point in the world data.
     * Will not make a new chunk if there is none and just return false.
     */
    setData(x: number, y: number, z: number, data: number): void | -1;
    getVoxel(x: number, y: number, z: number): any[] | false;
    addRegion(x: number, y: number, z: number): WorldRegion;
    getRegion(x: number, y: number, z: number): false | WorldRegion;
    addChunk(x: number, y: number, z: number): ChunkData;
    paintVoxel(voxelId: string, voxelStateId: string, x: number, y: number, z: number): void;
    /**# Insert Data
     * ---
     * Acts like **setData** but will create a new chunk if it does not exist.
     */
    insertData(x: number, y: number, z: number, data: number): void;
    getChunk(x: number, y: number, z: number): ChunkData | false;
    removeChunk(x: number, y: number, z: number): false | undefined;
    setChunk(x: number, y: number, z: number, chunk: ChunkData, doNotSyncInBuilderThread?: boolean): void;
    requestVoxelAdd(voxelId: string, voxelStateId: string, x: number, y: number, z: number): void;
    requestVoxelBeRemoved(x: number, y: number, z: number): void;
}
