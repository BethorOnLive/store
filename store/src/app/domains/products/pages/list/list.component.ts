import { Component, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal(<Product[]>([]));

  constructor(private cartService: CartService, private productService: ProductService){
    /*const initProducts: Product[] = [
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
      }
    ]
    this.products.set(initProducts);*/
  }

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products)
      },
      error: (err) => {
        console.error("Error al obtener productos:", err);
        // Puedes agregar más lógica, como mostrar un mensaje al usuario
      }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
