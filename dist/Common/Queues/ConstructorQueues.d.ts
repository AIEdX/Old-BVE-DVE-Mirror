export declare const ConstructorQueues: {
    $INIT(): void;
    _queueMap: Map<string | number, number>;
    addQueue(queueKey: string | number): boolean;
    removeQueue(queueKey: string | number): boolean;
    /**# Filter Queues
     * ---
     * Go through each current queue. IF the passed fucntion returns false it will remove that queue.
     * @param filter
     */
    filterQueues(filter: (queueKey: string | number) => boolean): void;
    /**# Filter Old Queues
     * ---
     * Will remove queues older then 10 minutes.
     * @param maxTime Max time in miliseconds.
     */
    filterOldQueues(maxTime?: number): void;
    rgb: {
        update: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
        remove: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    worldSun: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    voxelUpdate: {
        erease: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
        paint: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    sun: {
        update: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
        remove: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    explosion: {
        run: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    flow: {
        update: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
        remove: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    build: {
        chunk: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
    generate: {
        chunk: import("../../Libs/ThreadComm/Queue/QueueManager.js").QueueManager<any>;
    };
};
