import { DVEW } from "../../../out/World/DivineVoxelEngineWorld.js";

import { RegisterVoxels } from "../../Shared/Functions/RegisterVoxelData.js";

import { WorldGen } from "./WorldGen.js";

RegisterVoxels(DVEW);
const depth = 128;
const fillWorldColumns = () => {
 let startX = -depth - 16;
 let startZ = -depth - 16;
 let endX = depth + 16;
 let endZ = depth + 16;

 for (let x = startX; x < endX; x += 16) {
  for (let z = startZ; z < endZ; z += 16) {
   DVEW.worldData.fillWorldCollumnWithChunks(x, z);
   DVEW.queues.worldSun.add(x, z);
  }
 }
};

await DVEW.$INIT({});

let startX = -depth;
let startZ = -depth;
let endX = depth;
let endZ = depth;
for (let x = startX; x < endX; x += 16) {
 for (let z = startZ; z < endZ; z += 16) {
  WorldGen.generateChunk(x, 0, z);
 }
}
fillWorldColumns();

await DVEW.queues.worldSun.run();
for (let x = startX; x < endX; x += 16) {
 for (let z = startZ; z < endZ; z += 16) {
  DVEW.buildWorldColumn(x, z);
 }
}
await DVEW.queues.build.chunk.awaitAll();
await DVEW.queues.rgb.update.runAndAwait();
await DVEW.queues.build.chunk.runAndAwait();
(self as any).DVEW = DVEW;
