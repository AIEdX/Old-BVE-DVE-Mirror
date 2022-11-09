import { RunFlowNoChunkBuild } from "./Functions/RunFlowNoChunkBuild.js";
import { RunFlowReduce, RunFlowRemove, RunRemovePropagation } from "./Functions/RunFlowRemove.js";
import { RunFlow, RunFlowIncrease, RunFlowPropagation } from "./Functions/RunFlow.js";
import { DataTool } from "../../../Tools/Data/DataTool.js";
import { BrushTool } from "../../../Tools/Brush/Brush.js";
export declare const FlowManager: {
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
    dimension: number;
    currentVoxel: number;
    _visitedMap: Map<string, boolean>;
    _removeMap: Map<string, boolean>;
    _flowQue: number[][];
    _flowRemoveQue: number[][];
    _brush: BrushTool;
    _sDataTool: DataTool;
    _nDataTool: DataTool;
    runRemovePropagation: typeof RunRemovePropagation;
    runFlowReduce: typeof RunFlowReduce;
    runFlowRemove: typeof RunFlowRemove;
    runFlow: typeof RunFlow;
    runFlowNoChunkRebuild: typeof RunFlowNoChunkBuild;
    runFlowIncrease: typeof RunFlowIncrease;
    runFlowPropagation: typeof RunFlowPropagation;
    rebuildQue: number[][];
    rebuildMap: Record<string, boolean>;
    addToMap(x: number, y: number, z: number): void;
    inMap(x: number, y: number, z: number): boolean;
    addToRemoveMap(x: number, y: number, z: number): void;
    inRemoveMap(x: number, y: number, z: number): boolean;
    removeFromRemoveMap(x: number, y: number, z: number): boolean;
    setVoxel(level: number, levelState: number, x: number, y: number, z: number): void;
    removeVoxel(x: number, y: number, z: number): void;
    flowOutCheck(l: number, nl: number, ns: number, x: number, y: number, z: number): void;
    runRemoveCheck(x: number, y: number, z: number): void;
    setCurrentVoxel(x: number, y: number, z: number): boolean;
    runRebuildQue(): void;
    __addToRebuildQue(x: number, y: number, z: number): void;
    resetRebuildQue(): void;
    addToRebuildQue(x: number, y: number, z: number, sync?: boolean): void;
    setLevel(level: number, x: number, y: number, z: number): void;
    getLevel(x: number, y: number, z: number): number;
    getLevelState(x: number, y: number, z: number): number;
    canFlowOutwardTest(x: number, y: number, z: number): boolean;
    canFlowDownardTest(x: number, y: number, z: number): boolean;
    flowDownTest(x: number, y: number, z: number): boolean;
    wait(ms: number): Promise<unknown>;
    _lightValues: [any, number, any, number, any, number, any, number];
    getAbsorbLight(x: number, y: number, z: number): number;
    sunCheck(x: number, y: number, z: number): void;
};
