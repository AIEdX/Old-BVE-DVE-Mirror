import { DivineVoxelEngineRender } from "index";
import { EntityTypes } from "Meta/Entity/Entity.types";
import type {
 RenderedEntity,
 RenderedEntityData,
 RenderedEntityInterface,
} from "Meta/Entity/RenderedEntity.types";

export class RenderedEntitesManager {
 scene: BABYLON.Scene;
 entityTemplate: Record<
  string,
  { template: RenderedEntity; data: RenderedEntityData }
 > = {};
 loaedEntities: Record<EntityTypes, Record<string, RenderedEntityInterface>> = {
  player: {},
  being: {},
  item: {},
  npc: {},
  util: {},
 };

 constructor(private DVE: DivineVoxelEngineRender) {}

 setScene(scene: BABYLON.Scene) {
  this.scene = scene;
 }



 registerEntity(
  id: string,
  entityData: RenderedEntityData,
  renderedEntity: RenderedEntity
 ) {
  if (this.entityTemplate[id]) {
   throw new Error(`The entity with the ${id} already exists.`);
  }
  this.entityTemplate[id] = {
   template: renderedEntity,
   data: entityData,
  };
 }

 spawnEntity(
  entityId: string,
  identiferId: string,
  positionSBA: SharedArrayBuffer,
  statesSBA: SharedArrayBuffer
 ) {
  const entity = this.entityTemplate[entityId];
  const newEntity = new entity.template();
  const position = new Float32Array(positionSBA);
  const states = new Float32Array(statesSBA);
  newEntity.position = position;
  newEntity.states = states;
  newEntity.$INIT(entity.data);
  this.loaedEntities[entity.data.type][identiferId] = newEntity;
  newEntity.onSpawn(this.scene);
 }

 deSpawnEntity(entityId: string, identiferId: string) {
  const entity = this.entityTemplate[entityId];
  const despawningEntity = this.loaedEntities[entity.data.type][identiferId];
  if(!despawningEntity) return false;
  despawningEntity.onDeSpawn();
  delete this.loaedEntities[entity.data.type][identiferId];
 }
}