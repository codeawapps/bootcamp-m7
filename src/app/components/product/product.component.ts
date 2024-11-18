import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  // 1. public
  // 2. protected
  // 3. private

  protected onClickStock(isAdd: boolean = false): void {
    isAdd
      ? this.product.stock += 5
      : this.reduceStock();
  }

  protected hasStock(): boolean {
    return this.product.stock > 0;
  }

  private reduceStock(): void {
    this.product.stock = this.product.stock <= 5
      ? 0
      : this.product.stock - 5;
  }

}
