import { Component, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal(<Product[]>([]));

  constructor(private cartService: CartService){
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 125,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
        cretionAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 175,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        cretionAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 199,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        cretionAt: new Date().toISOString()
      },
      {
        id: 4,
        title: 'Producto 4',
        price: 125,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        cretionAt: new Date().toISOString()
      },
      {
        id: 5,
        title: 'Producto 5',
        price: 175,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        cretionAt: new Date().toISOString()
      },
      {
        id: 6,
        title: 'Producto 6',
        price: 199,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        cretionAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
