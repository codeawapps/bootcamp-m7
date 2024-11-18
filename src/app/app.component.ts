import { Component } from '@angular/core';
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp-m7';
}
