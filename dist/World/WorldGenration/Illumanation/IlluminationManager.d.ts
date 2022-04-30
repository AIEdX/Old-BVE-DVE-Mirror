import { Flat3DArray } from "Global/Util/Flat3DArray.js";
import type { LightByte } from "Global/Util/LightByte";
import { ChunkData } from "Meta/Chunks/Chunk.types.js";
import type { ChunkBound } from "Meta/World/ChunkBound.interface.js";
import type { ChunkBounds } from "Global/Chunks/ChunkBounds.js";
import type { DivineVoxelEngineWorld } from "World/DivineVoxelEngineWorld";
import { runRGBFloodFillAt, runRGBFloodRemove, runRGBFloodRemoveAt, runRGBFloodFill } from "./Functions/RGBFloodLight.js";
import { runSunLightRemove, runSunLightRemoveAt, runSunLightUpdate, runSunLightUpdateAt } from "./Functions/SunLight.js";
import type { VoxelByte } from "Global/Util/VoxelByte.js";
export declare class IlluminationManager implements ChunkBound {
    DVEW: DivineVoxelEngineWorld;
    lightByte: LightByte;
    voxelByte: VoxelByte;
    _3dArray: Flat3DArray;
    chunkBounds: ChunkBounds;
    air: number[];
    runSunLightUpdateAt: typeof runSunLightUpdateAt;
    runSunLightUpdate: typeof runSunLightUpdate;
    runSunLightRemove: typeof runSunLightRemove;
    runSunLightRemoveAt: typeof runSunLightRemoveAt;
    runRGBFloodFillAt: typeof runRGBFloodFillAt;
    runRGBFloodFill: typeof runRGBFloodFill;
    runRGBFloodRemoveAt: typeof runRGBFloodRemoveAt;
    runRGBFloodRemove: typeof runRGBFloodRemove;
    _RGBlightUpdateQue: number[][];
    _RGBlightRemovalQue: number[][];
    _sunLightUpdateQue: number[][];
    _sunLightRemoveQue: number[][];
    constructor(DVEW: DivineVoxelEngineWorld);
    syncChunkBounds(): void;
    addChunkToSunLightUpdate(chunk: ChunkData, chunkX: number, chunkY: number, chunkZ: number): void;
    populateChunkAirWithInitlSunLight(chunk: ChunkData): void;
}
