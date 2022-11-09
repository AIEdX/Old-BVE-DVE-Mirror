export declare const TCMessageHeaders: Readonly<{
    internal: number;
    runTasks: number;
    dataSync: number;
    message: number;
}>;
export declare const TCInternalMessages: Readonly<{
    IsReady: number;
    nameThread: number;
    connectPort: number;
    syncQueue: number;
    unSyncQueue: number;
}>;
export declare const TCDataSyncMessages: Readonly<{
    SyncData: number;
    UnSyncData: number;
}>;
