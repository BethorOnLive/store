import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/domains/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
      <div class="container mx-auto">
        <app-header/>
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
export class AppComponent {
  title = 'store';
}
