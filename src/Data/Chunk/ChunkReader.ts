import { Position3Matrix } from "Meta/Util.types.js";
import { Flat3DArray } from "../Util/Flat3DArray.js";
import { HeightMapArray } from "./HeightMapArray.js";
import { WorldBounds } from "../World/WorldBounds.js";
import { ChunkData } from "Meta/Data/WorldData.types.js";

export const ChunkReader = {
 chunkByteSize: 0,

 //size in bytes
 indexSizes: {
  header: 2,
  states: 10,
  position: 12,
  minMax: 8,
  heightMap: 0,
  voxelData: 0,
  voxelStateData: 0,
 },
 //index in bytes
 indexes: {
  header: 0,
  states: 0,
  position: 0,
  minMax: 0,
  heightMap: 0,
  voxelData: 0,
  voxelStateData: 0,
 },

 byteLengths: {
  heightMapData: 4,
  voxelData: 4,
  voxelStateData: 4,
 },

 syncSettings() {
  //set index sizes
  this.indexSizes.heightMap =
   WorldBounds.chunkArea * 2 * this.byteLengths.heightMapData;
  this.indexSizes.voxelData =
   WorldBounds.chunkTotalVoxels * this.byteLengths.voxelData;
  this.indexSizes.voxelStateData =
   WorldBounds.chunkTotalVoxels * this.byteLengths.voxelStateData;

  //set indexs
  this.indexes.states = this.indexSizes.header;
  this.indexes.position = this.indexes.states + this.indexSizes.states;
  this.indexes.minMax = this.indexes.position + this.indexSizes.position;
  this.indexes.heightMap = this.indexes.minMax + this.indexSizes.minMax;
  this.indexes.voxelData = this.indexes.heightMap + this.indexSizes.heightMap;
  this.indexes.voxelStateData =
   this.indexes.voxelData + this.indexSizes.voxelData;

  //calculate chunks total size in bytes
  this.chunkByteSize = 0;
  for (const key of Object.keys(this.indexSizes)) {
   this.chunkByteSize += (this as any).indexSizes[key];
  }

  this.hmBounds.x = WorldBounds.chunkXSize;
  this.hmBounds.z = WorldBounds.chunkXSize;
 },

 _getVoxelDataIndex(x: number, y: number, z: number) {
  const voxPos = WorldBounds.getVoxelPosition(x, y, z);
  return (
   Flat3DArray.getIndex(voxPos.x, voxPos.y, voxPos.z) *
    this.byteLengths.voxelData +
   this.indexes.voxelData
  );
 },

 _getVoxelStateDataIndex(x: number, y: number, z: number) {
  const voxPos = WorldBounds.getVoxelPosition(x, y, z);
  return (
   Flat3DArray.getIndex(voxPos.x, voxPos.y, voxPos.z) *
    this.byteLengths.voxelStateData +
   this.indexes.voxelStateData
  );
 },

 _chunkPositon: { x: 0, y: 0, z: 0 },

 getChunkPosition(chunk: DataView) {
  this._chunkPositon.x = chunk.getFloat32(this.indexes.position);
  this._chunkPositon.y = chunk.getFloat32(this.indexes.position + 4);
  this._chunkPositon.z = chunk.getFloat32(this.indexes.position + 8);
  return this._chunkPositon;
 },

 setChunkPosition(chunk: DataView, position: Position3Matrix) {
  chunk.setFloat32(this.indexes.position, position.x);
  chunk.setFloat32(this.indexes.position + 4, position.y);
  chunk.setFloat32(this.indexes.position + 8, position.z);
 },

 getVoxelChunkDataIndex(x: number, y: number, z: number, secondary = false) {
  let index = 0;
  if (!secondary) {
   index = this._getVoxelDataIndex(x, y, z);
  } else {
   index = this._getVoxelStateDataIndex(x, y, z);
  }

  return index;
 },

 hmBounds: {
  x: 16,
  y: 2,
  z: 16,
 },

 _getHeightMapIndex(x: number, y: number, z: number) {
  return x + y * this.hmBounds.x + z * this.hmBounds.z * this.hmBounds.y;
 },

 getHeightMapIndex(x: number, y: number, z: number) {
  return (
   this._getHeightMapIndex(x, y, z) * this.byteLengths.heightMapData +
   this.indexes.heightMap
  );
 },

 getVoxelData(
  chunkData: ChunkData,
  x: number,
  y: number,
  z: number,
  secondary = false
 ) {
  if (secondary) {
   return Atomics.load(
    chunkData.segement2,
    Flat3DArray.getIndex(x, y, z)
   );
  }
  return Atomics.load(
   chunkData.segement1,
   Flat3DArray.getIndex(x, y, z)
  );
 },
 setVoxelData(
  chunkData: ChunkData,
  x: number,
  y: number,
  z: number,
  data: number,
  secondary = false
 ) {
  if (secondary) {
   return Atomics.store(
    chunkData.segement2,
    Flat3DArray.getIndex(x, y, z),
    data
   );
  }
  return Atomics.store(
   chunkData.segement1,
   Flat3DArray.getIndex(x, y, z),
   data
  );
 },

 getVoxelDataUseObj(
  chunkData: ChunkData,
  position: Position3Matrix,
  secondary = false
 ) {
  return this.getVoxelData(
   chunkData,
   position.x,
   position.y,
   position.z,
   secondary
  );
 },
 setVoxelDataUseObj(
  chunkData: ChunkData,
  position: Position3Matrix,
  data: number,
  secondary = false
 ) {
  return this.setVoxelData(
   chunkData,
   position.x,
   position.y,
   position.z,
   data,
   secondary
  );
 },

 getHeightMapData(chunkData: DataView, x: number, y: number, z: number) {
  return chunkData.getUint32(this.getHeightMapIndex(x, y, z));
 },
 setHeightMapData(
  chunkData: DataView,
  x: number,
  y: number,
  z: number,
  data: number
 ) {
  return chunkData.setUint32(this.getHeightMapIndex(x, y, z), data);
 },

 getChunkMinData(chunkData: DataView) {
  return chunkData.getUint32(this.indexes.minMax);
 },
 setChunkMinData(chunkData: DataView, data: number) {
  return chunkData.setUint32(this.indexes.minMax, data);
 },

 getChunkMaxData(chunkData: DataView) {
  return chunkData.getUint32(this.indexes.minMax + 4);
 },
 setChunkMaxData(chunkData: DataView, data: number) {
  return chunkData.setUint32(this.indexes.minMax + 4, data);
 },
};
