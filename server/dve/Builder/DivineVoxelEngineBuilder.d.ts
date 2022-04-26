import { EngineSettingsData } from "Meta/Global/EngineSettings.types.js";
import { EngineSettings } from "../Global/EngineSettings.js";
import { Util } from "../Global/Util.helper.js";
import { ChunkMeshBuilder } from "./ChunkMeshBuilder.js";
import { ShapeHelper } from "./Shapes/ShapeHelper.js";
import { ShapeManager } from "./Shapes/ShapeManager.js";
import { MatrixHub } from "../Matrix/MatrixHub.js";
import { WorldMatrix } from "../Matrix/WorldMatrix.js";
export declare class DivineVoxelEngineBuilder {
    worker: Worker;
    UTIL: Util;
    worldMatrix: WorldMatrix;
    matrixHub: MatrixHub;
    engineSettings: EngineSettings;
    shapeManager: ShapeManager;
    shapeHelper: ShapeHelper;
    builder: ChunkMeshBuilder;
    syncSettings(data: EngineSettingsData): void;
    reStart(): void;
    $INIT(worker: Worker): void;
}
export declare const DVEB: DivineVoxelEngineBuilder;
