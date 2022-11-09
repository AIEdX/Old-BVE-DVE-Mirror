export class SyncedQueue {
    constructor(id, sab) {
        this.id = id;
        this.sab = sab;
        this.states = new Uint32Array();
        this.states = new Uint32Array(sab);
    }
    addToCount(total = 1) {
        Atomics.add(this.states, 0, total);
    }
    subtractFromCount(total = 1) {
        Atomics.sub(this.states, 0, total);
    }
}
