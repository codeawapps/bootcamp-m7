import { Component } from '@angular/core';
import { ProductComponent } from "./components/product/product.component";
import { Product, Stock, Stock__Action } from './models/product.interface';
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

  onEmitStockAction(event: Stock): void {
    const product = this.products.find((p: Product) => p.name === event.productName);
    if (product) {
      event.action === Stock__Action.ADD
        ? product.stock += 5
        : this.reduceStock(product);
    }
  }

  private reduceStock(product: Product): void {
    product.stock = product.stock <= 5
      ? 0
      : product.stock - 5;
  }

}
