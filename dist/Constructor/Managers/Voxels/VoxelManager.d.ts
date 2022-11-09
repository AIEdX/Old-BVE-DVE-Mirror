export declare const VoxelManager: {
    voxelObjects: Record<string, any>;
    syncShapeData(): Generator<never, void, unknown>;
    getVoxel(id: string): any;
    registerVoxel(voxel: any): void;
    runVoxelHookForAll(hook: any): void;
    removeVoxelHookForAll(hook: any): void;
};
