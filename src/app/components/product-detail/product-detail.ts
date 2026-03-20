import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf, KeyValuePipe } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, KeyValuePipe, ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  selectedImage = 0;
  product: any = null;

  heroImage = 'https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38';
  engineImage = 'https://images.unsplash.com/photo-1766842996145-464b9bed0493';
  generatorImage = 'https://images.unsplash.com/photo-1705051278299-7e64ba21437a';
  pumpImage = 'https://images.unsplash.com/photo-1772588047051-c35d272b5d9c';

  productDatabase: Record<string, any> = {
    'diesel-engine-450hp': {
      name: 'Industrial Diesel Engine 450HP',
      category: 'Engines',
      description: 'Heavy-duty diesel engine designed for continuous operation.',
      images: [this.engineImage, this.engineImage, this.engineImage],
      specifications: {
        'Power Output': '450 HP (336 kW)',
        'Engine Type': '6-Cylinder Turbocharged Diesel',
        Displacement: '12.5 Liters',
        'Fuel System': 'Common Rail Direct Injection',
      },
      features: [
        'Advanced turbocharging',
        'Heavy-duty construction',
        'Low emission technology',
        'Digital monitoring system',
      ],
    },
  };

  relatedProducts = [
    {
      id: 'diesel-engine-300hp',
      name: 'Agricultural Diesel Engine 300HP',
      category: 'Engines',
      description: 'Fuel-efficient diesel engine optimized for farms.',
      image: this.engineImage,
    },
    {
      id: 'generator-250kva',
      name: 'Backup Generator 250 KVA',
      category: 'Generators',
      description: 'Reliable backup power solution.',
      image: this.generatorImage,
    },
    {
      id: 'submersible-pump-100hp',
      name: 'Submersible Pump 100HP',
      category: 'Water Pumps',
      description: 'Deep well submersible pump.',
      image: this.pumpImage,
    },
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.productDatabase[id]) {
      this.product = this.productDatabase[id];
    }
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
