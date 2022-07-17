import { Rotations } from "./Mesher.types";
export declare type VoxelProcessData = {
    exposedFaces: number[];
    faceStates: number[];
    textureRotations: Rotations[];
    level: number;
    voxelState: string;
    voxelShapeState: number;
    uvTemplate: number[];
    overlayUVTemplate: number[];
    colorTemplate: number[];
    lightTemplate: number[];
    aoTemplate: number[];
    chunkX: number;
    chunkY: number;
    chunkZ: number;
    x: number;
    y: number;
    z: number;
};
