import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, NgFor],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  productLinks = [
    { path: '/products', label: 'Irrigation Systems' },
    { path: '/products', label: 'Diesel Engines' },
    { path: '/products', label: 'Generators' },
    { path: '/products', label: 'Water Pumps' }
  ];
}
