export declare const DimensionsRegister: {
    _count: number;
    dimensionRecord: Record<string, number>;
    dimensionMap: Record<number, string>;
    __defaultDimensionOptions: any;
    _dimensions: Record<string, any>;
    registerDimension(id: string, option: any): void;
    getDimension(id: string | number): any;
    getDimensionStringId(id: string | number): string;
    getDimensionNumericId(id: string | number): number;
};
