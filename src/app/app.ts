import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Footer } from "./layout/footer/footer";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  trigger,
  transition,
  style,
  query,
  animate
} from '@angular/animations';


// Animaciones
const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [

    query(':leave', [
      animate(
        '200ms ease-out',
        style({
          opacity: 0,
          transform: 'translateX(-30px)'
        })
      )
    ], { optional: true }),

    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(40px)'
      })
    ], { optional: true }),

    query(':enter', [
      animate(
        '300ms cubic-bezier(0.22, 1, 0.36, 1)',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      )
    ], { optional: true })

  ])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            Navbar, 
            Footer,
            FormsModule
          ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [fadeAnimation] // 👈 CLAVE
})
export class App {
  protected readonly title = signal('Muller-site');

  getRouteAnimation(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
