"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy flowers"),
    new todoItem_1.TodoItem(2, "play badminton"),
    new todoItem_1.TodoItem(3, "get grcery"),
];
let collection = new todoCollection_1.TodoCollection("sid", todos);
console.clear();
console.log(`${collection.userName}'s todo list`);
let newId = collection.addTodo("go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
