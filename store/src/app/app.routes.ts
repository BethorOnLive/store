import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { DrawerComponent } from './domains/shared/components/cart/sidebar/drawer.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'drawer',
        component: DrawerComponent
    }
];
