/**# Shape Helper
 * ---
 * A class that holds needed function shared betweeen different voxel shapes.
 */
export declare const ShapeHelper: {
    faceByte: {
        _rotationMap: Record<import("../../../Meta/Constructor/Mesher.types.js").Rotations, number>;
        _rotationReverseMap: Record<number, import("../../../Meta/Constructor/Mesher.types.js").Rotations>;
        _setFaceTextureState: Record<import("../../../Meta/Util.types.js").DirectionNames, (state: number, faceBit: number) => number>;
        _getFaceTextureState: Record<import("../../../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
        _setFaceRotateState: Record<import("../../../Meta/Util.types.js").DirectionNames, (state: number, faceBit: number) => number>;
        _getFaceRotateState: Record<import("../../../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
        _markExposedFace: Record<import("../../../Meta/Util.types.js").DirectionNames, (faceBit: number) => number>;
        _checkExposedFace: Record<import("../../../Meta/Util.types.js").DirectionNames, (faceBit: number) => boolean>;
        markFaceAsExposed(direction: import("../../../Meta/Util.types.js").DirectionNames, rawData: number): number;
        isFaceExposed(direction: import("../../../Meta/Util.types.js").DirectionNames, rawData: number): boolean;
        setFaceRotateState(direction: import("../../../Meta/Util.types.js").DirectionNames, state: number, rawData: number): number;
        getFaceRotateState(direction: import("../../../Meta/Util.types.js").DirectionNames, rawData: number): number;
        setFaceTextureState(direction: import("../../../Meta/Util.types.js").DirectionNames, rotation: import("../../../Meta/Constructor/Mesher.types.js").Rotations, rawData: number): number;
        getFaceTextureState(direction: import("../../../Meta/Util.types.js").DirectionNames, rawData: number): import("../../../Meta/Constructor/Mesher.types.js").Rotations;
    };
    lightByte: {
        SRS: number;
        _lightValues: [any, number, any, number, any, number, any, number];
        getS(value: number): number;
        getR(value: number): number;
        getG(value: number): number;
        /**# Shape Helper
         * ---
         * A class that holds needed function shared betweeen different voxel shapes.
         */
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
    meshFaceData: {
        setAnimationType(animationType: number, rawData: number): number;
        getAnimationType(rawData: number): number;
    };
    lightMap: number[];
    shouldFaceFlip(faceBit: number, faceDirection: any): boolean;
    getTextureRotation(faceBit: number, faceDirection: any): import("../../../Meta/Constructor/Mesher.types.js").Rotations;
    isFaceExposexd(faceBit: number, faceDirection: any): boolean;
    produceShapeReturnData(shapeData: any): any;
    toLinearSpace(r: number, g: number, b: number, a: number): number[];
    addFaceData(faceData: number, faceDataArray: number[]): void;
    calculateLightColor(RGBlightColors: number[], sunlightColors: number[], lightTemplate: number[], startIndex: number): void;
    calculateLightColorFromValue(RGBlightColors: number[], sunlightColors: number[], lightValue: number): void;
    calculateSunightColor(sunLight: number[], sunLightTemplate: number[], sunLightIndex: number): void;
    calculateAOColor(aoColors: number[], aoTemplate: number[], aoTemplateIndex: number): void;
    calculateAOColorFromValue(aoColors: number[], aoValue: number): void;
};
