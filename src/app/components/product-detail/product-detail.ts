import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { PRODUCTOS, Producto } from '../../data/producto';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, KeyValuePipe, ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  selectedImage = 0;
  product: Producto | undefined;

  heroImage = 'https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38';
  engineImage = 'https://images.unsplash.com/photo-1766842996145-464b9bed0493';
  generatorImage = 'https://images.unsplash.com/photo-1705051278299-7e64ba21437a';
  pumpImage = 'https://images.unsplash.com/photo-1772588047051-c35d272b5d9c';


  relatedProducts: Producto[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadProduct(id);
    });
  }

  loadProduct(id: number) {

    this.product = PRODUCTOS.find(p => p.id === id);
  
    if (this.product) {
      this.relatedProducts = PRODUCTOS
        .filter(p => p.category === this.product!.category && p.id !== this.product!.id)
        .slice(0, 3);
    }
  
    this.selectedImage = 0;
  }

  animateImage = true;

  selectImage(index: number) {

    if (index === this.selectedImage) return;

    this.selectedImage = index;

    this.animateImage = false;

    setTimeout(() => {
      this.animateImage = true;
    }, 10);

  }
}
