import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'Home' } },
    { path: 'products', component: ProductsComponent, data: { animation: 'Products' } },
    { path: 'about', component: AboutComponent, data: { animation: 'About' } },
    { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
    {
        path: 'products/:id',
        component: ProductDetail}
];

;
