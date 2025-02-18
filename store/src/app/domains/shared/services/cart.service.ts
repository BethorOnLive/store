import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal(<Product[]>([]));

   //Es un método dentro de CartService que verifica si un producto ya está en el carrito.
   isAlreadyInCart(product: Product): boolean {
    return this.cart().some(item => item.id === product.id);
  }
  
  addToCart(product:Product){
    if(!this.cart().some(prev => prev.id === product.id)){
      this.cart.update(prevState => [...prevState, {...product, quantity: 1}]);
    }
    console.log("addToCart");
    console.log("quantity in cart: ", this.cart().find(p => p.id === product.id)?.quantity);
  }

  removeFromCart(product: Product){
    this.cart.update((products) => products.filter(prev => prev.id !== product.id))
  }
}
