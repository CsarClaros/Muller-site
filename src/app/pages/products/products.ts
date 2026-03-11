import { Component,signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Button } from '../../components/ui/button/button';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Filter, X } from 'lucide-angular';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [ CommonModule, ProductCard, LucideAngularModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  heroImage =
    'https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBzcHJpbmtsZXIlMjBmYXJtfGVufDF8fHx8MTc3MzE3ODU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  engineImage = '...'; // continuar con los demás links
  generatorImage = '...';
  pumpImage = '...';

  allProducts: Product[] = [
    {
      id: 'diesel-engine-450hp',
      name: 'Industrial Diesel Engine 450HP',
      category: 'Engines',
      description: 'Heavy-duty diesel engine...',
      image: this.engineImage,
    },
    {
      id: 'diesel-engine-300hp',
      name: 'Agricultural Diesel Engine 300HP',
      category: 'Engines',
      description: 'Fuel-efficient diesel engine...',
      image: this.engineImage,
    },
    // agregar todos los demás productos...
  ];

  categories = ['All Products', 'Engines', 'Generators', 'Water Pumps', 'Irrigation'];

  selectedCategory = signal('All Products');
  showMobileFilters = signal(false);

  get filteredProducts() {
    return this.selectedCategory() === 'All Products'
      ? this.allProducts
      : this.allProducts.filter((p) => p.category === this.selectedCategory());
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
    this.showMobileFilters.set(false);
  }

  toggleMobileFilters() {
    this.showMobileFilters.update((v) => !v);
  }
}
