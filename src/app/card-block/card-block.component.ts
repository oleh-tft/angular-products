import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-block',
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent implements OnInit {
  
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';

  show() {
    console.log("test");
  }

  ngOnInit(){}
}
