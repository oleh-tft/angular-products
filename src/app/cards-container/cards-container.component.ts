import { Component, Output } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';

@Component({
  selector: 'app-cards-container',
  imports: [CardBlockComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {

  message: string = ''

  @Output() products = [
    {id: 1, name: 'product 1', price: 110, description: 'product1 text description'},
    {id: 2, name: 'product 2', price: 120, description: 'product2 text description'},
    {id: 3, name: 'product 3', price: 130, description: 'product3 text description'}
  ]

  receiveMessage(message: string) {
    this.message = message;
  }

}
