"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    id;
    task;
    complete;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // not required to assign values here as public defined in the methods tells that value will be set automatically
    }
    printDetails() {
        console.log(`${this.id}\t ${this.task} ${this.complete} ? "\t(complete)" : ""`);
    }
}
exports.TodoItem = TodoItem;
