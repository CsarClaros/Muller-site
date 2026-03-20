import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, ProductCard],
  templateUrl: './products.html'
})
export class ProductsComponent {

  heroImage = "https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38";
  engineImage = "https://images.unsplash.com/photo-1766842996145-464b9bed0493";
  generatorImage = "https://images.unsplash.com/photo-1705051278299-7e64ba21437a";
  pumpImage = "https://images.unsplash.com/photo-1772588047051-c35d272b5d9c";

  categories = [
    "All Products",
    "Engines",
    "Generators",
    "Water Pumps",
    "Irrigation"
  ];

  selectedCategory = "All Products";
  showMobileFilters = false;

  allProducts = [
    {
      id: "diesel-engine-450hp",
      name: "Industrial Diesel Engine 450HP",
      category: "Engines",
      description: "Heavy-duty diesel engine designed for continuous operation in demanding agricultural environments.",
      image: this.engineImage
    },
    {
      id: "diesel-engine-300hp",
      name: "Agricultural Diesel Engine 300HP",
      category: "Engines",
      description: "Fuel-efficient diesel engine optimized for farm equipment and irrigation systems.",
      image: this.engineImage
    },
    {
      id: "generator-500kva",
      name: "Power Generator 500 KVA",
      category: "Generators",
      description: "Industrial-grade generator with automatic start and fuel-efficient operation.",
      image: this.generatorImage
    },
    {
      id: "centrifugal-pump-200hp",
      name: "Centrifugal Water Pump 200HP",
      category: "Water Pumps",
      description: "High-capacity centrifugal pump for large-scale irrigation systems.",
      image: this.pumpImage
    },
    {
      id: "irrigation-system-pro",
      name: "Complete Irrigation System Pro",
      category: "Irrigation",
      description: "Automated drip irrigation system with smart water management technology.",
      image: this.heroImage
    }
  ];

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