import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { LucideAngularModule, Settings, Zap, Droplets, Shield, TrendingUp, Award, CheckCircle2, ChevronRight, Tractor, } from 'lucide-angular';
import { PRODUCTOS, Producto } from '../../data/producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule, ProductCard, LucideAngularModule],

  templateUrl: './home.html'
})
export class HomeComponent {


  icons = {
    Settings,
    Zap,
    Droplets,
    Tractor
  };

  // c:proyecto/imagnes/home/hero.webp

  heroImage = "assets/images/home/hero.webp";
  engineImage = "assets/images/our_products/gasoline_motor.webp";
  generatorImage = "assets/images/our_products/power_generator.webp";
  pumpImage = "assets/images/our_products/power_triller.webp";
  farmFieldImage = "assets/images/home/farm_field.webp";
  warehouseImage = "https://images.unsplash.com/photo-1560953981-28e3bab4aab6";

  categories = [
    {
      icon: this.icons.Settings,
      title: "Gasoline Motors",
      description: "Compact gasoline engines commonly used to power agricultural equipment such as brush cutters, water pumps, and small farming machines.",
      image: this.engineImage,
    },
    {
      icon: this.icons.Zap,
      title: "Power Generators",
      description: "Portable power generators designed to provide reliable electricity for agricultural tools, equipment, and rural work environments.",
      image: this.generatorImage,
    },
    {
      icon: this.icons.Tractor,
      title: "Power Tillers",
      description: "Compact two-wheel agricultural tillers used for soil preparation, cultivation, and small-scale farming operations.",
      image: this.pumpImage,
    },
  ];

  featuredProducts: Producto[] = [];

  constructor() {

    const featuredIds = [ 6, 15, 23 ];

    this.featuredProducts = featuredIds
      .map(id => PRODUCTOS.find(p => p.id === id))
      .filter((p): p is Producto => p !== undefined);

  }

  benefits = [
    {
      icon: Shield,
      title: "Durability",
      description: "Industrial-grade equipment built to withstand the toughest conditions",
    },
    {
      icon: TrendingUp,
      title: "Efficiency",
      description: "Optimized performance for maximum productivity and minimal waste",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Proven track record with thousands of satisfied B2B clients worldwide",
    },
  ];

  partners = [
    "Kholer",
    "Honda",
    "Visont",
    "Stihl",
    "Deutz",
    "Bosch"
  ];
  CheckCircle2 = CheckCircle2;
  ChevronRight = ChevronRight;
}