import type { DVEWGInitData } from "Meta/WorldGeneration/DVEWG";
import type { DivineVoxelEngineWorldGeneration } from "WorldGeneration/DivineVoxelEngineWorldGeneration";

export async function InitWorker(
 DVEWG: DivineVoxelEngineWorldGeneration,
 initData: DVEWGInitData
) {
 DVEWG.renderComm.onReady = initData.onReady;
 if (initData.onMessage) {
  DVEWG.renderComm.onMessage = initData.onMessage;
 }
 if (initData.onRestart) {
  DVEWG.renderComm.onRestart = initData.onRestart;
 }

 const renderPort = await DVEWG.UTIL.getWorkerPort(DVEWG.environment);
 DVEWG.renderComm.setPort(renderPort);

 await DVEWG.UTIL.createPromiseCheck({
  check: () => {
   return DVEWG.isReady();
  },
  checkInterval: 1,
 });
}