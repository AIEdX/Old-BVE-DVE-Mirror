import { RegisterDefaultFluidShapes } from "../Shapes/Functions/RegisterDefaultFluidShapes.js";
export function InitWorker(DVEFB) {
    RegisterDefaultFluidShapes(DVEFB);
    addEventListener("message", (event) => {
        const data = event.data;
        const message = data[0];
        if (message == "connect-world") {
            const port = event.ports[0];
            port.onmessage = (event) => {
                messageFromWorld(event);
            };
            port.postMessage(["connect-fluid-shape-map", DVEFB.shapeManager.shapeMap]);
        }
    });
    const messageFromWorld = (event) => {
        const data = event.data;
        const chunkType = data[0];
        const chunkX = data[1];
        const chunkZ = data[2];
        const positions = new Uint16Array(data[3]);
        const faces = new Uint8Array(data[4]);
        const shapes = new Uint16Array(data[5]);
        const uvs = new Uint16Array(data[6]);
        const lights = new Float32Array(data[7]);
        const ao = new Float32Array(data[8]);
        const meshData = DVEFB.fluidMeshBuilder.buildMesh(chunkX, chunkZ, positions, faces, shapes, uvs, lights, ao);
        const positionArray = new Float32Array(meshData.positions);
        const indiciesArray = new Int32Array(meshData.indices);
        const linearColorsArray = new Float32Array(meshData.colors);
        const fullColorsArray = new Float32Array(meshData.colors);
        const uvArray = new Float32Array(meshData.uvs);
        //@ts-ignore
        DVEFB.worker.postMessage([
            chunkType,
            chunkX,
            chunkZ,
            positionArray.buffer,
            indiciesArray.buffer,
            linearColorsArray.buffer,
            fullColorsArray.buffer,
            uvArray.buffer,
        ], 
        //@ts-ignore
        [
            positionArray.buffer,
            indiciesArray.buffer,
            linearColorsArray.buffer,
            fullColorsArray.buffer,
            uvArray.buffer,
        ]);
    };
}