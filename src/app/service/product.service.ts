import { Injectable } from '@angular/core';
import { ProductDescription } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private  products: Array<ProductDescription> = [
  {
    id: 1,
    Product_name: 'half girl frd',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/1/1/4/half-girlfriend-original-imaeaywyr6a5nazv.jpeg?q=70',
  description: 'a good book',
  imageAlt: 'book',
  isAvailable: true,
  price: 10
},
{
  id: 2,
  Product_name: 'one night at the call center',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/5/0/6/one-night-at-the-call-centre-original-imaesdu5ryqqrmhk.jpeg?q=70',
  description: 'my first book',
  imageAlt: 'book',
  isAvailable: true,
  price: 25
},
{ id: 3,
  Product_name: 'five point someone',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/4/9/0/five-point-someone-original-imaeyg6yfbyf62eg.jpeg?q=70',
  description: 'friendship based book',
  imageAlt: 'book',
  isAvailable: true,
  price: 35
},
{ id: 4,
  Product_name: 'one indian girl',
  image: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  description: 'i like the story',
  imageAlt: 'book',
  isAvailable: true,
  price: 49
},
{  id: 5,
  Product_name: 'one night at the call center',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/5/0/6/one-night-at-the-call-centre-original-imaesdu5ryqqrmhk.jpeg?q=70',
  description: 'my first book',
  imageAlt: 'book',
  isAvailable: true,
  price: 55
},
{   id: 6,
  Product_name: 'five point someone',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/4/9/0/five-point-someone-original-imaeyg6yfbyf62eg.jpeg?q=70',
  description: 'friendship based book',
  imageAlt: 'book',
  isAvailable: false,
  price: 65
},
{ id: 7,
  Product_name: 'one indian girl',
  image: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  description: 'i like the story',
  imageAlt: 'book',
  isAvailable: true,
  price: 79
},
{ id: 8,
  Product_name: 'one indian girl',
  image: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  description: 'i like the story',
  imageAlt: 'book',
  isAvailable: true,
  price: 89
},
{ id: 9,
  Product_name: '2 states',
  image: 'https://rukminim1.flixcart.com/image/612/612/book/5/4/3/2-states-the-story-of-my-marriage-original-imadutytmer3kgmh.jpeg?q=70',
  description: 'ture story',
  imageAlt: 'book',
  isAvailable: true,
  price: 99
}
];

  constructor() { }

  getProduct() {

   return this.products;

  }

  getProductWithID() {

  }

  addProduct(product: ProductDescription) {
    this.products.push(product);

  }
}
