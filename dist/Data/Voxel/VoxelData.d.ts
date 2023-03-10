import { VoxelSubstanceType } from "Meta/index.js";
export declare const VoxelData: {
    byteLength: {
        substance: number;
        shapeId: number;
        hardness: number;
        material: number;
        checkCollision: number;
        colliderId: number;
        lightSource: number;
        lightValue: number;
        isRich: number;
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
        isRich: number;
    };
    substanceRecord: Record<number, VoxelSubstanceType>;
    voxelData: {
        substance: VoxelSubstanceType;
        shapeId: number;
        hardness: number;
        material: number;
        checkCollision: number;
        colliderId: number;
        lightSource: number;
        lightValue: number;
        isRich: number;
    };
    voxelDataView: DataView;
    voxelMap: Uint16Array;
    syncData(voxelBuffer: SharedArrayBuffer, voxelMapBuffer: SharedArrayBuffer): void;
    getVoxelData(id: number): {
        substance: VoxelSubstanceType;
        shapeId: number;
        hardness: number;
        material: number;
        checkCollision: number;
        colliderId: number;
        lightSource: number;
        lightValue: number;
        isRich: number;
    };
    getSubstance(id: number): number;
    getTrueSubstance(id: number): VoxelSubstanceType;
    getShapeId(id: number): number;
    getHardness(id: number): number;
    getCheckCollisions(id: number): number;
    getColliderId(id: number): number;
    isLightSource(id: number): boolean;
    getLightValue(id: number): number;
    isRich(id: number): boolean;
};
