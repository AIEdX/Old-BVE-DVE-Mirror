declare type DimenionsMatrix = {
    width: number;
    height: number;
    depth: number;
};
export declare const ShapeBuilder: {
    faceFunctions: Record<any, (origin: any, dimensions: DimenionsMatrix, data: any, transform: {
        v1: {
            x: number;
            y: number;
            z: number;
        };
        v2: {
            x: number;
            y: number;
            z: number;
        };
        v3: {
            x: number;
            y: number;
            z: number;
        };
        v4: {
            x: number;
            y: number;
            z: number;
        };
    }, flip?: boolean | undefined) => void>;
    addFace(direction: any, origin: any, dimensions: DimenionsMatrix, data: any, flip?: boolean, transform?: {
        v1: {
            x: number;
            y: number;
            z: number;
        };
        v2: {
            x: number;
            y: number;
            z: number;
        };
        v3: {
            x: number;
            y: number;
            z: number;
        };
        v4: {
            x: number;
            y: number;
            z: number;
        };
    }): void;
};
export {};
