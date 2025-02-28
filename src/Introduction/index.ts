import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy flowers"),
  new TodoItem(2, "play badminton"),
  new TodoItem(3, "get grcery"),
];

let collection: TodoCollection = new TodoCollection("sid", todos);

console.clear();

console.log(`${collection.userName}'s todo list`);

let newId: number = collection.addTodo("go for run");

let todoItem: TodoItem = collection.getTodoById(newId);

todoItem.printDetails();
