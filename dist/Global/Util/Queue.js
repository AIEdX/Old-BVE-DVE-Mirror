class QueueNode {
    constructor(data) {
        this.data = data;
    }
}
export class Queue {
    constructor() {
        this.size = 0;
    }
    enqueue(data) {
        const node = new QueueNode(data);
        if (this.size == 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }
    dequeue() {
        if (this.size == 0)
            return null;
        if (!this.first)
            return null;
        let prevFirst = this.first;
        this.first = prevFirst.next;
        prevFirst.next = null;
        this.size--;
        return prevFirst.data;
    }
}
