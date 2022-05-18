import type { Flat3DArray } from "Global/Util/Flat3DArray";
import { PositionMatrix } from "Meta/Util.types";
/**# World Bounds
 * ---
 * This holds the data for the size of chunks, regions, and the world.
 * It also handles the calcuation of chunks, regions, and relative voxel positions.
 * A refernce is held to all classes that need it.
 */
export declare const WorldBounds: {
    chunkXPow2: number;
    chunkYPow2: number;
    chunkZPow2: number;
    chunkXSize: number;
    chunkYSize: number;
    chunkZSize: number;
    chunkTotalVoxels: number;
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
    syncBoundsWithFlat3DArray(flat3dArray: typeof Flat3DArray): void;
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
    getChunkKey(chunkPOS: PositionMatrix): string;
    getChunkKeyFromPosition(x: number, y: number, z: number): string;
    getRegionKey(regionPOS: PositionMatrix): string;
    getRegionKeyFromPosition(x: number, y: number, z: number): string;
    /**# Get Voxel Position From Chunk Position
     * ---
     * Returns the x/y/z index of the voxel in the chunk.
     * Used to find actual index in the chunk array.
     */
    getVoxelPositionFromChunkPosition(x: number, y: number, z: number, chunkPOS: PositionMatrix): {
        x: number;
        y: number;
        z: number;
    };
    getVoxelPosition(x: number, y: number, z: number): {
        x: number;
        y: number;
        z: number;
    };
};