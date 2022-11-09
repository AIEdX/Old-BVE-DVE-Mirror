declare type CommSyncOptions = {
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
    comms: Record<string, any>;
    commOptions: Record<string, CommSyncOptions>;
    $INIT(): void;
    isReady(): boolean;
    registerComm(comm: any): void;
    dimesnion: {
        unSync(id: string | number): void;
        unSyncInThread(commName: string, id: string | number): void;
        sync(data: any): void;
        syncInThread(commName: string, data: any): void;
    };
    chunk: {
        unSync(dimesnion: string | number, chunkX: number, chunkY: number, chunkZ: number): void;
        unSyncInThread(commName: string, dimension: string | number, chunkX: number, chunkY: number, chunkZ: number): void;
        sync(dimension: string | number, x: number, y: number, z: number): void;
        syncInThread(commName: string, dimesnion: string | number, x: number, y: number, z: number): void;
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
