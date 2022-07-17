import type { VoxelConstructorObject } from "../../../../../out/Meta/index.js";
import { DreamLeafsVoxelData } from "./DreamLeafs.voxel.data.js";

export const DreamLeafVoxelBuilderThread: VoxelConstructorObject = {
 data: DreamLeafsVoxelData,
 trueShapeId: 1,
 hooks: {},
 process: function (data, DVEB) {
  const uv = DVEB.textureManager.getTextureUV("flora", "dream-leafs");
  if (data.exposedFaces[0]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }
  if (data.exposedFaces[1]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }
  if (data.exposedFaces[2]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }
  if (data.exposedFaces[3]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }
  if (data.exposedFaces[4]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }
  if (data.exposedFaces[5]) {
   data.uvTemplate.push(uv);
   data.overlayUVTemplate.push(0, 0, 0, 0);
  }

  DVEB.processor.processVoxelLight(data);
 },
};
