import { Util } from "../Global/Util.helper.js";
import { BuilderWorkerManager } from "./Builders/BuilderWorkerManager.js";
import { World } from "./World/World.js";
import { RenderManager } from "./Render/RenderManager.js";
import { BuildInitalMeshes } from "./Functions/BuildInitalMeshes.js";
import { MeshManager } from "./Meshes/MeshManager.js";
import { EngineSettings } from "../Global/EngineSettings.js";
export class DivineVoxelEngine {
    world = new World(this);
    engineSettings = new EngineSettings();
    renderManager = new RenderManager();
    builderManager = new BuilderWorkerManager(this);
    meshManager = new MeshManager(this);
    util = new Util();
    constructor() { }
    _handleOptions() {
        const data = this.engineSettings.settings;
        if (data.textureOptions) {
            if (data.textureOptions.width && data.textureOptions.height) {
                this.renderManager.textureCreator.defineTextureDimensions(data.textureOptions.width, data.textureOptions.height);
            }
        }
    }
    _syncSettings(data) {
        this.engineSettings.syncSettings(data);
        this.world._syncSettings();
        this.builderManager._syncSettings();
    }
    async reStart(data) {
        this._syncSettings(data);
        this._handleOptions();
    }
    async $INIT(data) {
        this.engineSettings.syncSettings(data);
        this._handleOptions();
        this.world.createWorldWorker(data.worldWorkerPath);
        this.builderManager.createBuilderWorker(data.builderWorkerPath);
        this.builderManager.createFluidBuilderWorker(data.fluidBuilderWorkerPath);
        this._syncSettings(data);
        await this.world.getBaseWorldData();
        window.addEventListener("beforeunload", () => {
            for (const builder of this.builderManager.builders) {
                builder.terminate();
            }
            this.world.worker.terminate();
        });
    }
    async $SCENEINIT(data) {
        // data.scene.enableDepthRenderer();
        await BuildInitalMeshes(this, data.scene);
        this.world.startWorldGen();
    }
}