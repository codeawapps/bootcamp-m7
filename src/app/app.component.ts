import { Component } from '@angular/core';
import { ProductComponent } from "./components/product/product.component";
import { Product } from './models/product.interface';
import { products } from './models/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp-m7';

  products: Product[] = products;

}
