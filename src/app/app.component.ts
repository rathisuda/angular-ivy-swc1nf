import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'S Rathi';
  title = 'Angular Demo';
  products: string[] = ['Nokia', 'IPhone', 'Galaxy', 'One Note'];

  addItem(newItem: string) {
    this.products.push(newItem);
  }
}
