import { Task } from "./Tasks/Tasks.js";
import { CommManager } from "./Manager/CommManager.js";
import { CommBase } from "./Comm/Comm.js";
import { SyncedQueue } from "./Queue/SyncedQueue.js";
import { DataSync } from "./Data/DataSync.js";
export declare const ThreadComm: {
    threadNumber: number;
    threadName: string;
    environment: "node" | "browser";
    _comms: Record<string, CommBase>;
    _commManageras: Record<string, CommManager>;
    _tasks: Record<string, Task<any>>;
    _queues: Map<string, Map<string, SyncedQueue>>;
    _onDataSync: Record<string, DataSync<any, any>>;
    parent: CommBase;
    __internal: Record<number, Record<number, (data: any, event: any) => void>>;
    __initalized: boolean;
    __expectedPorts: Record<string, boolean>;
    $INIT(threadName: string): Promise<void>;
    getSyncedQueue(threadId: string, queueId: string): SyncedQueue | undefined;
    addComm(comm: CommBase): void;
    createComm<T>(name: string, mergeObject?: T): T & CommBase;
    createCommManager(data: any): CommManager;
    getComm(id: string): CommBase;
    getCommManager(id: string): CommManager;
    __throwError(message: string): never;
    getWorkerPort(): Promise<any>;
    __handleInternalMessage(data: any[], event: any): void;
    __isInternalMessage(data: any[]): boolean;
    __handleTasksMessage(data: any[]): Promise<void>;
    __isTasks(data: any[]): boolean;
    registerTasks<T_1>(id: string | number, run: (data: T_1) => void): Task<T_1>;
    __hanldeDataSyncMessage(data: any[]): Promise<void>;
    __isDataSync(data: any[]): boolean;
    onDataSync<T_2, K>(dataType: string | number, onSync?: ((data: T_2) => void) | undefined, onUnSync?: ((data: K) => void) | undefined): DataSync<T_2, K>;
};
