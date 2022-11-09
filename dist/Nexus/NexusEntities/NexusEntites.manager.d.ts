import { Position3Matrix } from "Meta/Util.types";
export declare const NexusEntites: {
    entityTemplate: Record<string, {
        template: any;
        data: any;
    }>;
    loaedEntities: Record<any, Record<string, any>>;
    registerEntity(id: string, entityData: any, nexusEntity: any): void;
    _getID(): string;
    _unqiueId(): string;
    _generateUUI(): string;
    spawnEntity(entityId: string, position: Position3Matrix, otherData?: any, identiferId?: string | undefined): void;
    ddSepawnEntity(entityId: string, identiferId: string): void;
};
