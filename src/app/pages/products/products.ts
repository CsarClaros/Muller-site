import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { PRODUCTOS, Producto } from '../../data/producto';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, ProductCard],
  templateUrl: './products.html'
})
export class ProductsComponent {

  heroImage = "https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38";

  categories = [
    "All Products",
    "Generadores",
    "Motores",
    "Bombas",
    "Compresores",
    "Construcción",
    "Hidrolavadoras"
  ];

  selectedCategory = "All Products";
  showMobileFilters = false;

  allProducts: Producto[] = PRODUCTOS;

  get filteredProducts() {
    if (this.selectedCategory === "All Products") {
      return this.allProducts;
    }

    return this.allProducts.filter(
      p => p.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  toggleMobileFilters() {
    this.showMobileFilters = !this.showMobileFilters;
  }

}