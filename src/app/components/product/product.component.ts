import { Component } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product: Product = {
    name: 'Manzana',
    desc: 'Test description',
    stock: 200
  };
}
