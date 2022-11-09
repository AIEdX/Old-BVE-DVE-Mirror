import { EngineSettingsData } from "Meta/index.js";
import { ItemMeshSetData } from "Meta/Render/Meshes/ItemMesh.types.js";
export declare const ItemMesh: {
    pickable: boolean;
    checkCollisions: boolean;
    seralize: boolean;
    clearCachedGeometry: boolean;
    createTemplateMesh(scene: any): any;
    syncSettings(settings: EngineSettingsData): void;
    _applyVertexData(mesh: any, data: ItemMeshSetData): void;
    rebuildMeshGeometory(mesh: any, data: ItemMeshSetData): Promise<any>;
    createMesh(x: number, y: number, z: number, data: ItemMeshSetData): Promise<any>;
};
