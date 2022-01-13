import { DVEVoxel1 } from "../Voxels/Voxel1.js";
import { DVEVoxel2 } from "../Voxels/Voxel2.js";
import { DebugBox } from "../Voxels/DebugBox.js";
export function RegisterVoxels(DVEW) {
    DVEW.voxelManager.registerVoxelData(new DebugBox(DVEW.voxelHelper));
    DVEW.voxelManager.registerVoxelData(new DVEVoxel1(DVEW.voxelHelper));
    DVEW.voxelManager.registerVoxelData(new DVEVoxel2(DVEW.voxelHelper));
}