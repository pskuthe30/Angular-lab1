import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'Grocery', completed: true },
    { task: 'Laundry', completed: false },
  ];
  searchTerm: string = '';
  constructor() {}
  ngOnInit(): void {}
  addTodo = (form: NgForm): void => {
    console.log(form);
    console.log(form.value.task);
    let newTodo: Todo = {
      task: form.form.value.task,
      completed:false ,
    };
    this.todos.push(newTodo);
  };
  setSearchTerm = (form: NgForm) => {
    this.searchTerm = form.form.value.term;
  };
  completeTask = (todo: Todo) => {
    todo.completed = true;
  };

  filterTodo = (term: string): Todo[] => {
    return this.todos.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    });
  };
  deleteTask = (index: number): void => {
    this.todos.splice(index, 1);
  };
}
