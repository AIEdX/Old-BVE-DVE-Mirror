import { SetUpEngine, SetUpCanvas, SetUpDefaultCamera, SetUpDefaultSkybox, runRenderLoop, SetUpDarkScene, } from "../Shared/Babylon/index.js";
import { RunInit, SetUpWorkers, SyncWithGraphicsSettings } from "../Shared/Create/index.js";
import { DVER } from "../../out/Render/DivineVoxelEngineRender.js";
import { RegisterTexutres } from "../Shared/Functions/RegisterTextures.js";
console.log("Starting Ocean World path is electron--> app-->js-->OceanTest-->index.js");
RegisterTexutres(DVER);
const workers = SetUpWorkers(import.meta.url, "./World/world.js", "../Shared/Constructor/constructor.js");
await DVER.$INIT({
    worldWorker: workers.worldWorker,
    constructorWorker: workers.constructorWorkers,
    lighting: {
        doAO: true,
        doRGBLight: false,
        doSunLight: false,
        autoRGBLight: false,
        autoSunLight: false,
    },
});
SyncWithGraphicsSettings(DVER);
const init = async () => {
    console.log("Starting Ocean World init");
    const canvas = SetUpCanvas();
    const engine = SetUpEngine(canvas);
    const scene = SetUpDarkScene(engine);
    const camera = SetUpDefaultCamera(scene, canvas, { x: 150, y: 60, z: 0 });
    SetUpDefaultSkybox(scene);
    await DVER.$SCENEINIT({ scene: scene });
    DVER.renderManager.setBaseLevel(1);
    runRenderLoop(engine, scene, camera, DVER);
};
RunInit(init);
