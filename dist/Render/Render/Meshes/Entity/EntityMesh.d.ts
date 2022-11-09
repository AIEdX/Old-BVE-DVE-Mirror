import { EngineSettingsData } from "Meta/index.js";
export declare const EntityMesh: {
    pickable: boolean;
    checkCollisions: boolean;
    seralize: boolean;
    clearCachedGeometry: boolean;
    createTemplateMesh(scene: any): any;
    syncSettings(settings: EngineSettingsData): void;
    _applyVertexData(mesh: any, data: any): void;
    rebuildMeshGeometory(mesh: any, data: any): Promise<any>;
    createMesh(x: number, y: number, z: number, data: any): Promise<any>;
};
