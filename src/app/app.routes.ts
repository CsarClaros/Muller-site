import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductsComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: 'contacto', component: ContactComponent },
];

;
