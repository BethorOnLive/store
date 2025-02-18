import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { Popover } from 'flowbite';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements AfterViewInit {

  @ViewChild('popoverButton', { static: false }) popoverButton!: ElementRef;
  @ViewChild('popoverElement', { static: false }) popoverElement!: ElementRef;

  constructor(private cartService:CartService){}

  private popoverInstance!: Popover;

  ngAfterViewInit() {
    this.popoverInstance = new Popover(
      this.popoverElement.nativeElement,
      this.popoverButton.nativeElement,
      { 
        placement: 'top',
        triggerType: 'none'
      }
    );
  }

  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    if(this.cartService.isAlreadyInCart(this.product)){
      this.togglePop();
    }
    this.addToCart.emit(this.product);
  }

  public togglePop() {
    if (this.popoverInstance.isVisible()) {
      this.popoverInstance.hide();
    } else {
      this.popoverInstance.show();
    }
  }
}