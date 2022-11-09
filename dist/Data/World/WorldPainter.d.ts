import { DataTool } from "../../Tools/Data/DataTool.js";
export declare const WorldPainter: {
    _currentionDimension: string;
    util: {
        isSameVoxel(dimensionId: string | number, x: number, y: number, z: number, x2: number, y2: number, z2: number, secondary?: boolean): boolean;
    };
    paint: {
        _dt: DataTool;
        voxel(data: any, update?: boolean): void;
        voxelAsync(data: any): Promise<void>;
        __paint(dimension: number, data: any, update?: boolean): false | undefined;
        erease(dimensionId: string | number, x: number, y: number, z: number): void;
    };
};
