import {
 RichChunk,
 RichRegion,
 RichWorldDimensions,
} from "Meta/Data/RichWorldData.types.js";
import { WorldBounds } from "../../Data/World/WorldBounds.js";
export const RichData = {
 worldBounds: WorldBounds,
 _dimensions: <RichWorldDimensions>{
  main: {},
 },

 initalData: <Record<string, any>>{},

 getRegion(x: number, y: number, z: number) {
  const dimension = this.getDimension("main");
  const regionKey = this.worldBounds.getRegionKeyFromPosition(x, y, z);
  if (!dimension[regionKey]) return false;
  return dimension[regionKey];
 },
 getDimension(dimension: string) {
  return this._dimensions[dimension];
 },
 getChunk(x: number, y: number, z: number) {
  const region = this.getRegion(x, y, z);
  if (!region) return false;
  const worldColumnKey = this.worldBounds.getColumnKey(x, z);
  if (!region.columns[worldColumnKey]) return false;
  const chunkKey = this.worldBounds.getChunkKeyFromPosition(x, y, z);
  const chunk = region.columns[worldColumnKey].chunks[chunkKey];
  if (!chunk) return false;
  return chunk;
 },
 addRegion(x: number, y: number, z: number) {
  if (this.getRegion(x, y, z)) return false;
  const dimension = this.getDimension("main");
  const regionKey = this.worldBounds.getRegionKeyFromPosition(x, y, z);
  const newRegion: RichRegion = {
   columns: {},
  };
  dimension[regionKey] = newRegion;
  return newRegion;
 },
 addChunk(x: number, y: number, z: number) {
  let region = this.getRegion(x, y, z);
  if (!region) {
   region = <RichRegion>this.addRegion(x, y, z);
  }
  const worldColumnKey = this.worldBounds.getColumnKey(x, z);
  if (!region.columns[worldColumnKey]) {
   region.columns[worldColumnKey] = {
    chunks: {},
   };
  }
  const chunkKey = this.worldBounds.getChunkKeyFromPosition(x, y, z);
  region.columns[worldColumnKey].chunks[chunkKey] = <RichChunk>{};
  return <RichChunk>region.columns[worldColumnKey].chunks[chunkKey];
 },

 setData(x: number, y: number, z: number, data: any) {
  let chunk = this.getChunk(x, y, z);
  if (!chunk) {
   chunk = <RichChunk>this.addChunk(x, y, z);
  }
  const richKey = this.worldBounds.getRichPositionKey(x, y, z);
  chunk[richKey] = data;
 },

 getData<T>(x: number, y: number, z: number): T | false {
  let chunk = this.getChunk(x, y, z);
  if (!chunk) return false;
  const richKey = this.worldBounds.getRichPositionKey(x, y, z);
  const data: T = chunk[richKey];
  if (!data) return false;
  return data;
 },

 removeData(x: number, y: number, z: number) {
  let chunk = this.getChunk(x, y, z);
  if (!chunk) {
   chunk = <RichChunk>this.addChunk(x, y, z);
  }
  const richKey = this.worldBounds.getRichPositionKey(x, y, z);
  delete chunk[richKey];
 },

 registerInitalDataForVoxel(voxelId: string, data: any) {
  this.initalData[voxelId] = data;
 },
 hasInitalData(voxelId: string) {
  return this.initalData[voxelId] !== undefined;
 },
 setInitalData(voxelId: string, x: number, y: number, z: number) {
  const data = this.initalData[voxelId];
  this.setData(x, y, z, data);
 },
};
