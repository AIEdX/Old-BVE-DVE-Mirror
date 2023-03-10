import type { VoxelData } from "dve/Meta/index";

export const LightDebugBoxVoxelData: VoxelData = {
    name: "Light Debug Box",
    shapeId: "Box",
    id: "dve:lightdebug",
    substance: "solid",
    lightSource: false,
    material : "stone",
    hardnress : 1000,
    physics : {
        collider : "Box",
        checkCollisions : true
     }
   };
