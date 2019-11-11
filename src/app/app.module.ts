import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [

  {
    path: '',
    component: ProductCardComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent
  },
  {
    path: 'addcart',
    component: AddcartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    FooterComponent,
    AddProductComponent,
    AddcartComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
