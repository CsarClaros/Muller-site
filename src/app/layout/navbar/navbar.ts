import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgFor, NgIf, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen = false;
  language: "EN" | "ES" = "EN";

  navLinks = [
    { path: '/', labelEN: 'Home', labelES: 'Inicio' },
    { path: '/products', labelEN: 'Products', labelES: 'Productos' },
    { path: '/about', labelEN: 'About Us', labelES: 'Nosotros' },
    { path: '/contact', labelEN: 'Contact', labelES: 'Contacto' }
  ];

  constructor(public router: Router) {}

  isActive(path: string) {
    return this.router.url === path;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setLanguage(lang: "EN" | "ES") {
    this.language = lang;
  }
}
