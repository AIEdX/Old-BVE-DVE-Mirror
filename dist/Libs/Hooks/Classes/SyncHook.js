export class SyncHook {
    constructor() {
        this._onRun = [];
    }
    run(data) {
        let returnData = false;
        for (const run of this._onRun) {
            returnData = run(data);
        }
        return returnData;
    }
    addToRun(run) {
        this._onRun.push(run);
    }
}
