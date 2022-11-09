export declare const WorldRegister: {
    _dimensions: any;
    _cacheOn: boolean;
    _cache: Map<string, any>;
    $INIT(): void;
    cache: {
        enable(): void;
        disable(): void;
        _add(key: string, data: any): void;
        _get(key: string): any;
    };
    dimensions: {
        add(id: string | number): Map<any, any>;
        get(id: string | number): any;
    };
    region: {
        add(dimensionId: string | number, x: number, y: number, z: number): any;
        get(dimensionId: string | number, x: number, y: number, z: number): any;
    };
    column: {
        add(dimensionId: string | number, x: number, z: number, y?: number): any;
        get(dimensionId: string | number, x: number, z: number, y?: number): any;
        fill(dimensionId: string | number, x: number, z: number, y?: number): void;
        height: {
            getRelative(dimensionId: string | number, x: number, z: number, y?: number): number;
            getAbsolute(dimensionId: string | number, x: number, z: number, y?: number): number;
        };
    };
    chunk: {
        add(dimensionId: string | number, x: number, y: number, z: number, sab: SharedArrayBuffer): any;
        get(dimensionId: string | number, x: number, y: number, z: number): any;
    };
};
