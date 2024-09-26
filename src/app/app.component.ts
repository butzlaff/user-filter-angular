import { Component } from '@angular/core';

type Person = {
  name: string;
  age: number;
  status: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
