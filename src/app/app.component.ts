import { Component } from '@angular/core';
import { ProductComponent } from "./components/product/product.component";
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp-m7';

  product1: Product = {
    name: 'Manzana',
    desc: 'test desc.',
    stock: 20
  };

  product2: Product = {
    name: 'Pera',
    desc: 'test desc. 2',
    stock: 35
  };

}
