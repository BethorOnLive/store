import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  addToCartFromChild(event:string){
    console.log(`Estamos en el padre: ${event}`);
  }
}
