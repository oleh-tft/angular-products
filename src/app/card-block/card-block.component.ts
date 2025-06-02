import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-block',
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';

  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.message.emit(this.description);
  }

  show() {
    console.log("test");
  }
}
