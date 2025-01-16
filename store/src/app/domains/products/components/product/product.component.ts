import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img: string = '';
  @Input({required:true}) price: number = 0;
  @Input({required:true}) title: string = '';

  @Output() addToCart = new EventEmitter();
  addToCartHandler(){
    this.addToCart.emit('Este es un mensaje desde el hijo ' + this.title);
  }
}
