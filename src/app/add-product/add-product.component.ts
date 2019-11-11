import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
this.myForm = new FormGroup({
  Product_name: new FormControl('', Validators.required ),
  price: new FormControl(),
  description: new FormControl('', Validators.maxLength(10)),
  Email: new FormControl('', Validators.email),
  image: new FormControl('', Validators.required),
  isAvailable: new FormControl('', Validators.required),

});
console.log(this.myForm);


  }

  onSubmit(form: FormGroup) {
    this.productService.addProduct(this.myForm.value);

    console.log(this.myForm.value);
  }


}
