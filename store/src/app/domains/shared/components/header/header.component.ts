import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../cart/sidebar/sidebar.component'

@Component({
  selector: 'app-header',
  imports: [SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  
}
