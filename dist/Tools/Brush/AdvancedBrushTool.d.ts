import { BrushTool } from "./Brush.js";
export declare const GetAdvancedBrushTool: () => BrushTool & {
    paintAndAwaitUpdate(): Promise<unknown>;
    ereaseAndAwaitUpdate(): Promise<unknown>;
    paintAndUpdate(onDone?: Function | undefined): void;
    ereaseAndUpdate(onDone?: Function | undefined): void;
    explode(radius?: number, onDone?: Function | undefined): void;
};
