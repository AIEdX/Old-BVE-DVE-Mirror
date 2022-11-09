import { DataTool } from "../Tools/Data/DataTool.js";
export declare const DVEPH: {
    math: {
        visitAll: (startPoint: any, endPoint: any, visitor?: (x: number, y: number, z: number) => boolean) => number[];
        getVector3(x: number, y: number, z: number): import("../Libs/Math/Classes/Vector3.js").Vector3;
        getPlane(pv1: import("../Libs/Math/Classes/Vector3.js").Vector3, pv2: import("../Libs/Math/Classes/Vector3.js").Vector3, pv3: import("../Libs/Math/Classes/Vector3.js").Vector3, pv4: import("../Libs/Math/Classes/Vector3.js").Vector3): import("../Libs/Math/Classes/Plane.js").Plane;
        getSimpleBoundingBox(origin: import("../Libs/Math/Classes/Vector3.js").Vector3, dimensions: import("../Libs/Math/Types/Math.types.js").DimensionsVector3): import("../Libs/Math/Classes/SimpleBoundingBox.js").SimpleBoundingBox;
        getBoundingBox(data: import("../Libs/Math/Classes/BoundingBox.js").BoundingBoxData): import("../Libs/Math/Classes/BoundingBox.js").BoundingBox;
        convertToOriginGridSpace(position: number[]): number[];
        distance2D(x1: number, x2: number, y1: number, y2: number): number;
        distance3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
    };
    collisions: {
        sweepAABB(ax: number, ay: number, az: number, ahx: number, ahy: number, ahz: number, bx: number, by: number, bz: number, bhx: number, bhy: number, bhz: number, dx: number, dy: number, dz: number): {
            h: number;
            nx: number;
            ny: number;
            nz: number;
        };
        lineToPlane(px: number, py: number, pz: number, ux: number, uy: number, uz: number, vx: number, vy: number, vz: number, nx: number, ny: number, nz: number): number;
        between(x: number, a: number, b: number): boolean;
    };
    colliders: {
        colliders: Record<string, any>;
        registerCollider(collider: any): void;
        getCollider(id: string): any;
    };
    wroldData: {
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
    _dataTool: DataTool;
    voxelManager: any;
    $INIT(manager: any): void;
    getCollider(x: number, y: number, z: number, dimension?: number): any;
    createEntityObject<T>(base: T): any;
};
export declare type DivineVoxelEnginePhysics = typeof DVEPH;
