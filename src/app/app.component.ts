import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = [];

  ngOnInit(): void {
    this.loadListOnInit();
  }

  loadListOnInit() {
    if (localStorage.getItem("list") != null) {
      let a = JSON.parse(localStorage.getItem("list"))
      a.forEach(item => {
        this.todoList.push(item)
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

  addTodo(newTodoLabel, indexToInsert) {
    let listOnLocalStorage = JSON.parse(localStorage.getItem("list"));
    let existPriority = false;

    var newTodo = {
      label: newTodoLabel,
      done: false
    };

    // si la priority n'existe pas déjà on remplis la liste
    if (!existPriority) {
      indexToInsert = parseInt(indexToInsert) - 1;
      this.todoList.splice(indexToInsert, 0, newTodo);
    }

    localStorage.setItem("list", JSON.stringify(this.todoList));
  }

  deleteTodo(todo) {
    // filter return the list of todos without the deleted todo 
    this.todoList = this.todoList.filter(t => t.label !== todo.label)
  }

  onChangeDone(checkStatus, indexOfLabel) {
    this.todoList[indexOfLabel].done = checkStatus;
    localStorage.setItem("list", JSON.stringify(this.todoList));
    console.log(this.todoList);
    console.log(this.todoList[indexOfLabel]);
  }
}
