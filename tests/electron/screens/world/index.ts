console.log("hello from world screen");

import type { ElementTreeData } from "libs/index.js";
import { ElementTree } from "../libs/ElementTree/ElementTree.js";
import { VoxelSelectScreen } from "./VoxelSelect/VoxelSelectScreen.js";

const props = { active: false };
const [cascade] = ElementTree.cascade(props);

window.addEventListener("keydown", (event) => {
 if (event.key == "z") {
  props.active = !props.active;
  cascade();
 }
});

let canvas: HTMLCanvasElement;
const inte = setInterval(() => {
 canvas = <HTMLCanvasElement>document.getElementById("renderCanvas");
 if (canvas) {
  clearInterval(inte);
 }
}, 1);

const WorldScreen = (): ElementTreeData => {
 return [
  {
   type: "div",
   attrs: {
    className: "screen inactive",
   },
   children: [VoxelSelectScreen()],
   cascade: {
    origin: props,
    receiver(elm: HTMLDivElement, cascadeProps) {
     if (cascadeProps.active) {
      document.exitPointerLock();
      elm.classList.remove("inactive");
      elm.classList.add("active");
     } else {
      canvas.requestPointerLock();
      elm.classList.add("inactive");
      elm.classList.remove("active");
     }
    },
   },
  },
 ];
};

ElementTree.linkCSS(import.meta.url, "world.css");

ElementTree.bloomRoot(WorldScreen());
