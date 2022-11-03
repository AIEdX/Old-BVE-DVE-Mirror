import type { VoxelSubstanceType } from "Meta/index.js";
import { UpdateTasks } from "Meta/Tasks/Tasks.types.js";
export declare const DVEP: {
    illumination: {
        lightData: {
            SRS: number;
            _lightValues: [s: number, r: number, g: number, b: number];
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
            getLightValues(value: number): [s: number, r: number, g: number, b: number];
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
        air: number[];
        dimension: number;
        runSunLightUpdateAt: typeof import("./Illumanation/Functions/SunLight.js").runSunLightUpdateAt;
        runSunLightUpdate: typeof import("./Illumanation/Functions/SunLight.js").runSunLightUpdate;
        runSunLightRemove: typeof import("./Illumanation/Functions/SunLight.js").runSunLightRemove;
        runSunLightRemoveAt: typeof import("./Illumanation/Functions/SunLight.js").runSunLightRemoveAt;
        populateWorldColumnWithSunLight: typeof import("./Illumanation/Functions/WorldSun.js").PopulateWorldColumnWithSunLight;
        runSunLightUpdateAtMaxY: typeof import("./Illumanation/Functions/WorldSun.js").RunSunLightUpdateAtMaxY;
        runSunLightFloodDown: typeof import("./Illumanation/Functions/WorldSun.js").RunSunLightFloodDown;
        runSunLightFloodOut: typeof import("./Illumanation/Functions/WorldSun.js").RunSunLightFloodOut;
        sunLightAboveCheck: typeof import("./Illumanation/Functions/WorldSun.js").SunLightAboveCheck;
        _sunLightUpdateQue: import("../../Global/Util/Queue.js").Queue<number[]>;
        _sunLightFloodDownQue: import("../../Global/Util/Queue.js").Queue<number[]>;
        _sunLightFloodOutQue: Record<string, import("../../Global/Util/Queue.js").Queue<number[]>>;
        _sunLightRemoveQue: number[][];
        runRGBFloodFillAt: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodFillAt;
        runRGBFloodFill: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodFill;
        runRGBFloodRemoveAt: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemoveAt;
        runRGBFloodRemove: typeof import("./Illumanation/Functions/RGBFloodLight.js").runRGBFloodRemove;
        _RGBlightUpdateQue: number[][];
        _RGBlightRemovalQue: number[][];
        _sDataTool: import("../../Tools/Data/DataTool.js").DataTool;
        _nDataTool: import("../../Tools/Data/DataTool.js").DataTool;
        addToRebuildQue(x: number, y: number, z: number): void;
    };
    flow: {
        lightData: {
            SRS: number;
            _lightValues: [s: number, r: number, g: number, b: number];
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
            getLightValues(value: number): [s: number, r: number, g: number, b: number];
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
        _visitedMap: Record<string, boolean>;
        _flowQue: number[][];
        _flowRemoveQue: number[][];
        _brush: import("../../Tools/Brush/Brush.js").VoxelBrush;
        _sDataTool: import("../../Tools/Data/DataTool.js").DataTool;
        _nDataTool: import("../../Tools/Data/DataTool.js").DataTool;
        runRemovePropagation: typeof import("./Flow/Functions/RunFlowRemove.js").RunRemovePropagation;
        runFlowReduce: typeof import("./Flow/Functions/RunFlowRemove.js").RunFlowReduce;
        runFlowRemove: typeof import("./Flow/Functions/RunFlowRemove.js").RunFlowRemove;
        runFlow: typeof import("./Flow/Functions/RunFlow.js").RunFlow;
        runFlowNoChunkRebuild: typeof import("./Flow/Functions/RunFlowNoChunkBuild.js").RunFlowNoChunkBuild;
        runFlowIncrease: typeof import("./Flow/Functions/RunFlow.js").RunFlowIncrease;
        runFlowPropagation: typeof import("./Flow/Functions/RunFlow.js").RunFlowPropagation;
        rebuildQue: number[][];
        rebuildMap: Record<string, boolean>;
        addToMap(x: number, y: number, z: number): void;
        inMap(x: number, y: number, z: number): boolean;
        setVoxel(level: number, levelState: number, x: number, y: number, z: number): void;
        runRemoveCheck(x: number, y: number, z: number): void;
        setCurrentVoxel(x: number, y: number, z: number): boolean;
        runRebuildQue(): void;
        __addToRebuildQue(x: number, y: number, z: number): void;
        resetRebuildQue(): void;
        addToRebuildQue(x: number, y: number, z: number, sync?: boolean): void;
        setLevel(level: number, x: number, y: number, z: number): void;
        removeVoxel(x: number, y: number, z: number): void;
        getLevel(x: number, y: number, z: number): number;
        getLevelState(x: number, y: number, z: number): number;
        canFlowOutwardTest(x: number, y: number, z: number): boolean;
        canFlowDownardTest(x: number, y: number, z: number): boolean;
        flowDownTest(x: number, y: number, z: number): boolean;
        wait(ms: number): Promise<unknown>;
        _lightValues: [s: number, r: number, g: number, b: number];
        getAbsorbLight(x: number, y: number, z: number): number;
        sunCheck(x: number, y: number, z: number): void;
    };
    rebuildQueMap: Map<string, Map<string, boolean>>;
    $INIT(): void;
    _dimension: string;
    _buildQueue: string;
    addToRebuildQue(x: number, y: number, z: number, substance: VoxelSubstanceType | "all"): void;
    _process(data: UpdateTasks): void;
    resetRebuildQue(): void;
    runRebuildQue(): void;
    runRGBFloodFill(data: UpdateTasks): void;
    runRGBFloodRemove(data: UpdateTasks): void;
    runSunLightForWorldColumn(x: number, z: number, maxY: number): void;
    runSunFloodFillAtMaxY(x: number, z: number, maxY: number): void;
    runSunFloodFillMaxYFlood(x: number, z: number, maxY: number): void;
    runSunLightUpdate(data: UpdateTasks): void;
    runSunLightRemove(data: UpdateTasks): void;
    updateFlowAt(data: UpdateTasks): Promise<void>;
    removeFlowAt(data: UpdateTasks): Promise<void>;
};
export declare type DivineVoxelEnginePropagation = typeof DVEP;
