import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button [ngClass]="classes" [disabled]="disabled">
    <ng-content></ng-content>
  </button>`,
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' =
    'default';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  @Input() disabled = false;

  get classes(): string {
    const variants: Record<string, string> = {
      default: 'bg-primary text-white hover:bg-primary/90',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border bg-white text-gray-800 hover:bg-gray-100',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ghost: 'bg-transparent text-gray-800 hover:bg-gray-100',
      link: 'text-blue-600 underline hover:text-blue-700',
    };

    const sizes: Record<string, string> = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3 py-1.5 text-sm',
      lg: 'h-10 px-6 py-3 text-lg',
      icon: 'h-9 w-9 p-0',
    };

    return `${variants[this.variant]} ${sizes[this.size]} rounded-md font-medium transition-all`;
  }
}
