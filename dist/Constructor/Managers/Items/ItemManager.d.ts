import { ItemShapeData } from "Meta/Constructor/ItemShape.type";
export declare const ItemManager: {
    itemObjects: Record<string, any>;
    itemShapes: Record<string, ItemShapeData>;
    getItem(id: string): any;
    registerItem(item: any): void;
    registerItemShape(shapeData: ItemShapeData): void;
    getItemShapeData(id: string): ItemShapeData;
    runItemHookForAll(hook: any): void;
    removeItemHookForAll(hook: any): void;
};
