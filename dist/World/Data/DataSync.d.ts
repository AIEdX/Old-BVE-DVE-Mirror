import type { DimensionData } from "Meta/Data/DimensionData.types.js";
import type { CommBase } from "Libs/ThreadComm/Comm/Comm.js";
import type { CommManager } from "Libs/ThreadComm/Manager/CommManager.js";
type DID = string | number;
type CommSyncOptions = {
    chunks: boolean;
    voxelPalette: boolean;
    voxelData: boolean;
};
export declare const DataSync: {
    voxelDataCreator: {
        voxelBuffer: SharedArrayBuffer;
        voxelMapBuffer: SharedArrayBuffer;
        shapeMap: Record<string, number>;
        __shapeMapSet: boolean;
        isReady(): boolean;
        $createVoxelData(): void;
        setShapeMap(shapeMap: Record<string, number>): void;
        palette: {
            _count: number;
            _palette: Record<number, string>;
            _map: Record<string, number>;
            registerVoxel(voxel: import("../../Meta/index.js").VoxelData): void;
            getVoxelBaseId(id: number): number;
            getVoxelStateId(voxelId: string, voxelState: number): number;
            getVoxelStringId(voxelId: number): string;
            getVoxelState(voxelId: number): number;
            get(): Record<number, string>;
            getMap(): Record<string, number>;
        };
    };
    comms: Record<string, CommBase | CommManager>;
    commOptions: Record<string, CommSyncOptions>;
    $INIT(): void;
    isReady(): boolean;
    registerComm(comm: CommBase | CommManager): void;
    dimesnion: {
        unSync(id: string | number): void;
        unSyncInThread(commName: string, id: string | number): void;
        sync(data: DimensionData): void;
        syncInThread(commName: string, data: DimensionData): void;
    };
    chunk: {
        unSync(dimesnion: DID, chunkX: number, chunkY: number, chunkZ: number): void;
        unSyncInThread(commName: string, dimension: DID, chunkX: number, chunkY: number, chunkZ: number): void;
        sync(dimension: DID, x: number, y: number, z: number): void;
        syncInThread(commName: string, dimesnion: DID, x: number, y: number, z: number): void;
    };
    voxelData: {
        sync(): void;
        syncInThread(commName: string): void;
    };
    voxelPalette: {
        sync(): void;
        syncInThread(commName: string): void;
    };
};
export {};
