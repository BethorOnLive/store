import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@services/cart.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-drawer',
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  isDrawer = signal(false);
  quantity = signal(0);
  freeShipping = 1000;

  constructor(public cartService: CartService){
  }

  toggleDrawer(){
    this.isDrawer.update(prevState => !prevState)
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  //Calculate the total cart
  totalCart = computed(() => {
    const cart = this.cartService.cart();
    const amount = cart.reduce((sum, cart) => sum + (cart.price * (cart.quantity ?? 1)), 0);
    return amount;
  })

  totalItems = computed(() =>{
    const cart = this.cartService.cart();
    return cart.reduce((amount, item) => amount + (item.quantity ?? 0), 0)
  })

  progressFreeShipping = computed(() =>{
    const totalAmount = this.totalCart();
    const amounForFreeShipping = this.freeShipping;
    return totalAmount <= amounForFreeShipping ? (this.totalCart() * 100) / this.freeShipping : 100; 
  })

  progressClass = computed(() =>{
    if(this.progressFreeShipping() < 50) return 'bg-red-400'
    if(this.progressFreeShipping() < 100) return 'bg-amber-400'
    if(this.progressFreeShipping() == 100) return 'bg-emerald-500'
    return 'bg-blue-600'
  })

  incrementQuantity(product: Product){
    this.cartService.cart.update(prevState => prevState.map(prev =>
      prev.id === product.id 
      ? {...prev, quantity:(prev.quantity ?? 0) + 1} 
      : prev
    ))
  }

  decrementQuantity(product: Product){
    this.cartService.cart.update(prevState => prevState.map(prev => prev.id === product.id 
      ? {...prev, quantity: (prev.quantity ?? 0) - 1}
      : prev
    ))
   
    if(this.cartService.cart().find(p => p.id === product.id)?.quantity == 0){
      this.removeFromCart(product);
    }
  }
}
