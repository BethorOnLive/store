import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebar = signal(false);

  constructor(){
    console.log("isSidebar", this.isSidebar);
    
  }

  toggleSidebar(){
    this.isSidebar.update(prevState => !prevState)
  }
}
