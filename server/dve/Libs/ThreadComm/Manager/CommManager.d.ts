import type { CommPortTypes } from "../Meta/Comm/Comm.types";
import type { MessageFunction, MessageRecord } from "../Meta/Util.types.js";
import type { CommManagerData } from "../Meta/Manager/Manager.types.js";
import { CommBase } from "../Comm/Comm.js";
import { QueueManager } from "../Queue/QueueManager.js";
export declare class CommManager {
    _totalComms: number;
    _currentCom: number;
    __comms: CommBase[];
    __data: CommManagerData;
    __queues: Record<string, QueueManager<any>>;
    messageFunctions: MessageRecord;
    constructor(data: CommManagerData);
    __throwError(message: string): void;
    connectToCom(commToConnectTo: CommBase): void;
    destroyAll(): void;
    isReady(): boolean;
    waitTillAllAreReady(): Promise<boolean>;
    addPort(port: CommPortTypes): void;
    addPorts(ports: CommPortTypes[]): void;
    addComms(comms: CommBase[]): void;
    __isManagerMessage(data: any): boolean;
    __handleManagerMessage(data: any, event: any): void;
    listenForMessage(message: string | number, run: MessageFunction): void;
    sendMessageToAll(message: string | number, data?: any[], transfers?: any[]): void;
    runTasksForAll<T>(id: string, data: T, transfers?: any[], queue?: string): void;
    runTask<T>(id: string | number, data: T, transfers?: any[], threadNumber?: number, queue?: string): number;
    __handleCount(): number;
    addQueue<T>(id: string | number, associatedTasksId: string | number, beforeRun?: (data: T) => T, afterRun?: (data: T, thread: number) => void, getThread?: (data: T) => number, getTransfers?: (data: T) => any[]): QueueManager<T>;
    getQueue<T>(id: string): QueueManager<T>;
    __syncQueue(id: string, sab: SharedArrayBuffer): void;
    __unSyncQueue(id: string): void;
    syncData<T>(dataType: string, data: T): void;
    unSyncData<T>(dataType: string, data: T): void;
}
