import { Component, Input, output } from '@angular/core';
import { Product, Stock, Stock__Action } from '../../models/product.interface';
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
  onEmitStock$ = output<Stock>();

  protected stockAction = Stock__Action;

  protected onClickStock(action: Stock__Action = Stock__Action.ADD): void {
    this.onEmitStock$.emit({
      action,
      productName: this.product.name
    });
  }

  protected hasStock(): boolean {
    return this.product.stock > 0;
  }
}
