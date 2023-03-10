import {
 RenderedEntityData,
 RenderedEntityInterface,
} from "../../../../out/Meta/index";

export const Entity1RenderedData: RenderedEntityData = {
 type: "item",
 dependencies: {},
};

export class Entity1Rendered implements RenderedEntityInterface {
 position: Float32Array;
 states: Float32Array;
 $INIT(data: RenderedEntityData) {

 }
 onSpawn(scene: BABYLON.Scene) {
  const cube = BABYLON.MeshBuilder.CreateBox("entity", { size: 0.5 }, scene);
  const cubeMaterial = new BABYLON.StandardMaterial("1",scene);
  cube.material = cubeMaterial;
  cubeMaterial.diffuseColor = new BABYLON.Color3(0.7,0,0.7);
  setInterval(() => {
   cube.position.x = this.position[0] + .5;
   cube.position.y = this.position[1] - 0.72;
   cube.position.z = this.position[2] + .5;
   cube.rotation.y += .01;
  }, 20);
 }
 onDeSpawn() {}
 update() {}
}
