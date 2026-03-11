import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() id!: string;
  @Input() name!: string;
  @Input() category!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() price?: string;

  constructor(private router: Router) {}

  goToProduct() {
    this.router.navigate(['/products', this.id]);
  }

  handleImageError(event: any) {
    event.target.src = 'assets/fallback.png'; // Ruta de imagen fallback
  }
}
