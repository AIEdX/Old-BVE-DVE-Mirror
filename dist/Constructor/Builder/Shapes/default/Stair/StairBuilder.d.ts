import { Rotations } from "Meta/Constructor/Mesher.types.js";
export declare type sideTypes = "normal" | "stair-top" | "stair-side" | "side";
declare type StairAO = [number, number, number, number];
declare type _3Array = [number, number, number];
export declare type StairUVData = {
    r: Rotations;
    ws: number;
    we: number;
    hs: number;
    he: number;
};
export declare type stairBuildData = {
    type: sideTypes;
    flip?: {
        1?: boolean;
        2?: boolean;
    };
    dimensions?: {
        1: _3Array;
        2?: _3Array;
    };
    uvs?: {
        1: StairUVData;
        2: StairUVData;
    };
    StairAO?: {
        1: StairAO;
        2: StairAO;
    };
    transform?: {
        1?: _3Array;
        2?: _3Array;
    };
};
export declare const stairCachedPosition: {
    x: number;
    y: number;
    z: number;
};
export declare const buildStair: (data: any, stairData: Record<any, stairBuildData>) => void;
export {};
