import { Component } from '@angular/core';
import { ProductDescription } from './model/product';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ayyanar-book-centre';



//   age = 0;
//   count: number;

//   person: Person = {
//     name: 'Akhil',
//     age: 27
//   };

//   persons: Array<Person> = [{
//     name: 'Nikhil',
//     age: 30
//   },
// {
//   name: 'linto',
//   age: 27
// },
// {
//   name: 'Akhil',
//   age: 20
// }
// ];

// random: Array<any> = ['name', 12, {name: 'Akhil'}, [1,2,3]]
}
