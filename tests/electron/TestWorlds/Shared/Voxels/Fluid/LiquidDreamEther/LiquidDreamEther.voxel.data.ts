import type { VoxelData } from "out/Meta/index";

export const LiquidDreamEtherVoxelData: VoxelData = {
    name: "Liquid Dream Ether",
    shapeId: "FluidSourceBlock",
    id: "dve:liquiddreamether",
    substance: "fluid",
    material : "water",
    hardnress : 1000,
    physics : {
        collider : "Box",
        checkCollisions : true
     }
   };
