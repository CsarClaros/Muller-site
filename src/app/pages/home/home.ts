import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { LucideAngularModule, Settings, Zap, Droplets,Shield, TrendingUp, Award } from 'lucide-angular';

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
    Droplets
  };

  heroImage = "https://images.unsplash.com/photo-1690100693182-e6d7fe91bc38";
  engineImage = "https://images.unsplash.com/photo-1766842996145-464b9bed0493";
  generatorImage = "https://images.unsplash.com/photo-1705051278299-7e64ba21437a";
  pumpImage = "https://images.unsplash.com/photo-1772588047051-c35d272b5d9c";
  farmFieldImage = "https://images.unsplash.com/photo-1684229864513-8399b70a838d";
  warehouseImage = "https://images.unsplash.com/photo-1560953981-28e3bab4aab6";

  categories = [
    {
      icon: this.icons.Settings,
      title: "Diesel Engines",
      description: "High-performance engines for agricultural and industrial applications",
      image: this.engineImage,
    },
    {
      icon: this.icons.Zap,
      title: "Power Generators",
      description: "Reliable backup and continuous power generation solutions",
      image: this.generatorImage,
    },
    {
      icon: this.icons.Droplets,
      title: "Irrigation Pumps",
      description: "Advanced water pumping systems for efficient irrigation",
      image: this.pumpImage,
    },
  ];

  featuredProducts = [
    {
      id: "diesel-engine-450hp",
      name: "Industrial Diesel Engine 450HP",
      category: "Engines",
      description: "Heavy-duty diesel engine designed for continuous operation in demanding agricultural environments.",
      image: this.engineImage,
      price: "Request Quote",
    },
    {
      id: "generator-500kva",
      name: "Power Generator 500 KVA",
      category: "Generators",
      description: "Industrial-grade generator with automatic start and fuel-efficient operation.",
      image: this.generatorImage,
      price: "Request Quote",
    },
    {
      id: "centrifugal-pump-200hp",
      name: "Centrifugal Water Pump 200HP",
      category: "Water Pumps",
      description: "High-capacity centrifugal pump for large-scale irrigation systems.",
      image: this.pumpImage,
      price: "Request Quote",
    },
    {
      id: "irrigation-system-pro",
      name: "Complete Irrigation System Pro",
      category: "Irrigation",
      description: "Automated drip irrigation system with smart water management technology.",
      image: this.heroImage,
      price: "Request Quote",
    },
  ];

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
    "Caterpillar",
    "John Deere",
    "Cummins",
    "Perkins",
    "Kubota",
    "Yanmar"
  ];

}