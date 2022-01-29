import { DivineVoxelEngineWorld } from "../../../out/World/DivineVoxelEngineWorld.js";
import { RegisterTexutres } from "../../Shared/Functions/RegisterTextures.js";
import { RegisterVoxels } from "../../Shared/Functions/RegisterVoxels.js";

import { WorldGen } from "./WorldGen/WorldGen.js";

const DVEW = new DivineVoxelEngineWorld(self as any);

(self as any).DVEW = DVEW;

RegisterTexutres(DVEW);
RegisterVoxels(DVEW,"global");

const worldGen = new WorldGen(DVEW);

const start = () => {
 const chunk = worldGen.generateChunk(0, 0);
 DVEW.worldData.setChunk(0,0, 0, chunk);
 const chunk2 = worldGen.generateChunk(-16, 0);
 DVEW.worldData.setChunk(-16,0, 0, chunk2);
 const chunk3 = worldGen.generateChunk(16, 0);
 DVEW.worldData.setChunk(16,0, 0, chunk3);
 const chunk4 = worldGen.generateChunk(0, 16);
 DVEW.worldData.setChunk(0,0, 16, chunk4);
 const chunk5 = worldGen.generateChunk(0, -16);
 DVEW.worldData.setChunk(0,0, -16, chunk5);

 DVEW.worldData.setChunk(-16,0, 16, worldGen.generateChunk(-16, 16, "pillar"));
 DVEW.worldData.setChunk(16,0, 16, worldGen.generateChunk(16, 16));
 DVEW.worldData.setChunk(16,0, -16, worldGen.generateChunk(16, -16, "pillar"));
 DVEW.worldData.setChunk(-16,0, -16, worldGen.generateChunk(-16, -16));

 DVEW.buildChunk(0,0, 0);
 DVEW.buildChunk(-16,0, 0);
 DVEW.buildChunk(16,0, 0);
 DVEW.buildChunk(0, 0,-16);
 DVEW.buildChunk(0, 0,16);

 DVEW.buildChunk(-16,0, 16);
 DVEW.buildChunk(16,0, 16);
 DVEW.buildChunk(16,0, -16);
 DVEW.buildChunk(-16,0, -16);
//@ts-ignore
DVEW.buildFluidMesh();
};

DVEW.$INIT({
 voxelPaletteMode: "global",
 onReady: start,
 onMessage: (message: string, data: any[]) => {},
});