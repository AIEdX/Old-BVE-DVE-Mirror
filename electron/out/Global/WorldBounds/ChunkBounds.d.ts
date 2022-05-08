import { Flat3DArray } from "Global/Util/Flat3DArray";
/**# Chunk Bounds
 * ---
 * This only holds the data for the size of chunks.
 * A refernce is held to all classes that need it.
 */
export declare class ChunkBounds {
    chunkXPow2: number;
    chunkYPow2: number;
    chunkZPow2: number;
    chunkXSize: number;
    chunkYSize: number;
    chunkZSize: number;
    chunkTotalVoxels: number;
    syncBoundsWithFlat3DArray(flat3dArray: Flat3DArray): void;
    setChunkBounds(pow2X: number, pow2Y: number, pow2Z: number): void;
}