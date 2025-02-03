import { Component, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal(<Product[]>([]));

  constructor(){
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 125,
        image: 'https://picsum.photos/320/320?r23',
        cretionAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 175,
        image: 'https://picsum.photos/320/320?r24',
        cretionAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 199,
        image: 'https://picsum.photos/320/320?r25',
        cretionAt: new Date().toISOString()
      },
      {
        id: 4,
        title: 'Producto 4',
        price: 125,
        image: 'https://picsum.photos/320/320?r26',
        cretionAt: new Date().toISOString()
      },
      {
        id: 5,
        title: 'Producto 5',
        price: 175,
        image: 'https://picsum.photos/320/320?r27',
        cretionAt: new Date().toISOString()
      },
      {
        id: 6,
        title: 'Producto 6',
        price: 199,
        image: 'https://picsum.photos/320/320?r28',
        cretionAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts);
  }

  addToCartFromChild(event:string){
    console.log(`Estamos en el padre: ${event}`);
  }
}
