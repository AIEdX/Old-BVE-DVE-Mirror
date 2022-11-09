import { runRGBUpdateAt, runRGBRemove, runRGBRemoveAt, runRGBUpdate } from "./Functions/RGBLight.js";
import { runSunLightRemove, runSunLightRemoveAt, runSunLightUpdate, runSunLightUpdateAt } from "./Functions/SunLight.js";
import { DataTool } from "../../../Tools/Data/DataTool.js";
import { RunWorldSun } from "./Functions/WorldSun.js";
export declare const IlluminationManager: {
    lightData: {
        SRS: number;
        _lightValues: [any, number, any, number, any, number, any, number];
        getS(value: number): number;
        getR(value: number): number;
        getG(value: number): number;
        getB(value: number): number;
        setS(value: number, sl: number): number;
        setR(value: number, sl: number): number;
        setG(value: number, sl: number): number;
        setB(value: number, sl: number): number;
        removeS(sl: number): number;
        hasRGBLight(sl: number): boolean;
        getRGB(sl: number): number;
        setRGB(value: number, sl: number): number;
        decodeLightFromVoxelData(voxelData: number): number;
        encodeLightIntoVoxelData(voxelData: number, encodedLight: number): number;
        setLightValues(values: number[]): number;
        getLightValues(value: number): [any, number, any, number, any, number, any, number];
        isLessThanForRGBRemove(n1: number, n2: number): boolean;
        isLessThanForRGBAdd(n1: number, n2: number): boolean;
        isGreaterOrEqualThanForRGBRemove(n1: number, n2: number): boolean;
        getMinusOneForRGB(sl: number, nl: number): number;
        removeRGBLight(sl: number): number;
        getFullSunLight(sl: number): number;
        isLessThanForSunAdd(n1: number, n2: number): boolean;
        isLessThanForSunAddDown(n1: number, n2: number): boolean;
        isLessThanForSunAddUp(n1: number, n2: number): boolean;
        getSunLightForUnderVoxel(sl: number, nl: number): number;
        getMinusOneForSun(sl: number, nl: number): number;
        isLessThanForSunRemove(n1: number, sl: number): boolean;
        isGreaterOrEqualThanForSunRemove(n1: number, sl: number): boolean;
        sunLightCompareForDownSunRemove(n1: number, sl: number): boolean;
        removeSunLight(sl: number): number;
        minusOneForAll(sl: number): number;
    };
    runSunLightUpdateAt: typeof runSunLightUpdateAt;
    runSunLightUpdate: typeof runSunLightUpdate;
    runSunLightRemove: typeof runSunLightRemove;
    runSunLightRemoveAt: typeof runSunLightRemoveAt;
    _sunLightUpdate: any;
    _sunLightRemove: number[][];
    runWorldSun: typeof RunWorldSun;
    _worldSunQueue: number[][];
    runRGBUpdateAt: typeof runRGBUpdateAt;
    runRGBUpdate: typeof runRGBUpdate;
    runRGBRemoveAt: typeof runRGBRemoveAt;
    runRGBRemove: typeof runRGBRemove;
    _RGBlightUpdateQ: number[][];
    _RGBlightRemovalQ: number[][];
    _sDataTool: DataTool;
    _nDataTool: DataTool;
    addToRebuildQue(x: number, y: number, z: number): void;
};
