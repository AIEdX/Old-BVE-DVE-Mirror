import type { DivineVoxelEngineWorld } from "../../../../out/World/DivineVoxelEngineWorld";

export class WorldGen {
 lightSourceColor: number;
 seedLightSourceColor: number;
 constructor(public DVEW: DivineVoxelEngineWorld) {}

 chunkDepth = 16;
 chunkWidth = 16;
 chunkHeight = 128;

 renderDistance = 20;

 generateChunk(chunkX: number, chunkY: number, chunkZ: number) {
  let maxY = 10;

  for (let x = 0; x < +this.chunkWidth; x++) {
   for (let z = 0; z < this.chunkDepth; z++) {
    let currentY = maxY;

    let minus = Math.random() > 0.5;
    if (minus) {
     currentY -= Math.random() * 2;
    } else {
     currentY += Math.random() * 2;
    }
    currentY = currentY >> 0;
    for (let y = 0; y < this.chunkHeight; y++) {
     if (y < currentY) {
      this.DVEW.worldData.paintVoxel(
       "dve:dreamstonepillar",
       "default",
       x + chunkX,
       y + chunkY,
       z + chunkZ
      );
     }

     if (Math.random() < 0.01 && y == currentY) {
      this.DVEW.worldData.paintVoxel(
       "dve:dreamlamp",
       "default",
       x + chunkX,
       y + chunkY,
       z + chunkZ
      );
     }
    }
   }
  }
 }
}
