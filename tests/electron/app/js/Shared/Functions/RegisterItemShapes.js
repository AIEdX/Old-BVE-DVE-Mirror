import { DebugItemShape } from "../ItemShapes/Debug/Debug.item.shape.js";
{
    DivineVoxelEngineConstructor;
}
from;
"../../../out/Constructor/DivineVoxelEngineConstructor";
import { VineItemShape } from "../ItemShapes/Vine/Vine.item.shape.js";
export function RegisterItemShapes(DVEC) {
    DVEC.itemManager.registerItemShape(DebugItemShape);
    DVEC.itemManager.registerItemShape(VineItemShape);
}
