import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  protected onClickStock(isAdd: boolean = false): void {
    console.log(1);
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
