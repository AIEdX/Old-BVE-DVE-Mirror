import type { VoxelData } from "out/Meta/index";

export const DreadGrassBlockVoxelData: VoxelData = {
 name: "Dread Grass Block",
 shapeId: "Box",
 id: "dve:dreadgrassblock",
 substance: "flora",
 material: "grass",
 hardnress: 1000,
 physics: {
  collider: "Box",
  checkCollisions: true,
 },
};
