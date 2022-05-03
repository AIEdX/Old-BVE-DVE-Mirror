import { InterCommPortTypes } from "Meta/Comms/InterComm.types";
import type { DivineVoxelEngineWorld } from "World/DivineVoxelEngineWorld";
/**# Matrix Thread Central Hub
 *---
 * Hanldes all syncing and releasing of data between chunk bound threads.
 */
export declare class MatrixCentralHub {
    private DVEW;
    threads: Record<string, InterCommPortTypes>;
    constructor(DVEW: DivineVoxelEngineWorld);
    _threadMessageFunctions: Record<string, (data: any, event: MessageEvent) => void>;
    registerThread(threadId: string, thread: InterCommPortTypes): void;
    syncChunk(chunkX: number, chunkY: number, chunkZ: number): false | undefined;
    syncChunkInThread(threadId: string, chunkX: number, chunkY: number, chunkZ: number): false | undefined;
    releaseChunk(chunkX: number, chunkY: number, chunkZ: number): void;
    releaseChunkInThread(threadId: string, chunkX: number, chunkY: number, chunkZ: number): void;
    syncGlobalVoxelPalette(): void;
    syncGlobalVoxelPaletteInThread(threadId: string): void;
    syncRegionVoxelPalette(regionX: number, regionY: number, regionZ: number): false | undefined;
    syncRegionVoxelPaletteInThread(threadId: string, regionX: number, regionY: number, regionZ: number): false | undefined;
    releaseRegionVoxelPalette(regionX: number, regionY: number, regionZ: number): void;
    releaseRegionVoxelPaletteInThread(threadId: string, regionX: number, regionY: number, regionZ: number): void;
}