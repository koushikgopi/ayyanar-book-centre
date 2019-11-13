import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  prod: any;

  constructor(private service: ProductService) {
  }


  ngOnInit() {
    this.service.getProduct().subscribe(Response => {
      this.prod = Response;
      console.log(this.prod);
    });
  }

}

