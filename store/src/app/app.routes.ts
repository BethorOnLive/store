import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { SidebarComponent } from './domains/shared/components/cart/sidebar/sidebar.component';

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
        path: 'sidebar',
        component: SidebarComponent
    }
];
