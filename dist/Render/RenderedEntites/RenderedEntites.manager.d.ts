export declare const RenderedEntitesManager: {
    scene: any;
    entityTemplate: Record<string, {
        template: any;
        data: any;
    }>;
    loaedEntities: Record<any, Record<string, any>>;
    setScene(scene: any): void;
    registerEntity(id: string, entityData: any, renderedEntity: any): void;
    spawnEntity(entityId: string, identiferId: string, positionSBA: SharedArrayBuffer, statesSBA: SharedArrayBuffer): void;
    deSpawnEntity(entityId: string, identiferId: string): false | undefined;
};
