import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../cart/sidebar/drawer.component';
import { CartService } from '../../services/cart.service';  

@Component({
  selector: 'app-header',
  imports: [DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild(DrawerComponent) drawer!: DrawerComponent;
  
  constructor(public cartService: CartService){}
}
