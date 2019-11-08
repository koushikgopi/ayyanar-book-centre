import { Component, OnInit } from '@angular/core';
import { ProductDescription } from '../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

products: Array<ProductDescription> = [
  {
  name: 'half girl frd',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/1/1/4/half-girlfriend-original-imaeaywyr6a5nazv.jpeg?q=70',
  description: 'a good book',
  imageAlt: 'book',
  isAvailable: true,
  price: 50
},
{
  name: 'one night at the call center',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/5/0/6/one-night-at-the-call-centre-original-imaesdu5ryqqrmhk.jpeg?q=70',
  description: 'my first book',
  imageAlt: 'book',
  isAvailable: true,
  price: 75
},
{
  name: 'five point someone',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/4/9/0/five-point-someone-original-imaeyg6yfbyf62eg.jpeg?q=70',
  description: 'friendship based book',
  imageAlt: 'book',
  isAvailable: true,
  price: 65
},
{
  name: 'one indian girl',
  image: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  description: 'i like the story',
  imageAlt: 'book',
  isAvailable: true,
  price: 29
},
{
  name: '2 states',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/5/4/3/2-states-the-story-of-my-marriage-original-imadutytmer3kgmh.jpeg?q=70',
  description: 'ture story',
  imageAlt: 'book',
  isAvailable: false,
  price: 29
},
];

  constructor() { }

  ngOnInit() {
  }

}
