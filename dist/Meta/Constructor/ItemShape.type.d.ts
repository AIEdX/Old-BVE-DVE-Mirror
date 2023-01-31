import { DirectionNames } from "Meta/Util.types";
export type ItemShapeData = {
    id: string;
    faces: {
        direction: DirectionNames;
        position: [number, number, number];
        dimensions: [number, number, number];
        uvs: [number, number, number, number];
    }[];
};
export type CreateItemData = {
    positions: number[];
    normals: number[];
    indices: number[];
    RGBLightColors: number[];
    sunLightColors: number[];
    uvs: number[];
    indicieIndex: number;
    unTemplate: number[];
    uvTemplateIndex: number;
    lightTemplate: number[];
    lightIndex: number;
};
