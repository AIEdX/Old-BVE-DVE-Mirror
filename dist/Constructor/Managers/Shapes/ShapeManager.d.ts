export declare const ShapeManager: {
    shapes: Record<number, any>;
    shapeMap: Record<string, number>;
    shapeCount: number;
    registerShape(shapeObject: any): void;
    getShape(shapeId: number): any;
    getShapeId(shapeId: string): number;
    getShapeMap(): Record<string, number>;
};
