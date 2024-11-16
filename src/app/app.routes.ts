import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {path: "", redirectTo: 'ecommerce', pathMatch: "full"},
    {path: "ecommmerce", component: EcommerceComponent},
    {path: "header", component: HeaderComponent},
    {path: "sidebar", component: SidebarComponent},
];
