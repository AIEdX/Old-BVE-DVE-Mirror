import { DVEW } from "../../../out/World/DivineVoxelEngineWorld.js";
import { PlayerWatcher } from "../../Shared/Player/Type2/PlayerWatcher.js";
import { RegisterVoxels } from "../../Shared/Functions/RegisterVoxelData.js";
import { WorldGen } from "./WorldGen/WorldGen.js";
const playerWatcher = new PlayerWatcher(DVEW);
RegisterVoxels(DVEW);
await DVEW.$INIT({});
let startX = -32;
let startZ = -32;
let endX = 32;
let endZ = 32;
for (let x = startX; x < endX; x += 16) {
    for (let z = startZ; z < endZ; z += 16) {
        WorldGen.generateChunk(x, 0, z);
        DVEW.queues.build.chunk.add([x, 0, z]);
    }
}
await DVEW.queues.rgb.update.runAndAwait();
await DVEW.queues.build.chunk.runAndAwait();
DVEW.nexusComm.sendMessage("done", []);
self.DVEW = DVEW;
