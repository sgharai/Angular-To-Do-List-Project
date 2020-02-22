import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular-todolist';

  constructor() {
    this.changeName("Sofia");
  }

  changeName(name:string){
    this.name = name;
  }
}
