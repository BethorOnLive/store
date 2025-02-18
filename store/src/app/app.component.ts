import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/domains/shared/components/header/header.component';
import { CarouselComponent } from './domains/shared/components/carousel/carousel.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarouselComponent],
  template: `
      <app-header/>
      <app-carousel/>
      <div class="container mx-auto">
        <div class="pt-8">
          <router-outlet/>
        </div>
      </div>
  `,
  /*styles: [`
    .border {
      min-height: 100vh;
      border: solid red 3px;
    }
  `]*/
})
export class AppComponent implements OnInit{
  title = 'store';

  ngOnInit(): void {
    initFlowbite();
  }
}
