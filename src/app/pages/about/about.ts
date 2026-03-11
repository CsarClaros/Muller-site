import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
  icon: string; // ruta o nombre de icono SVG inline
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
    teamImage = "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczMTQ1MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  warehouseImage = "https://images.unsplash.com/photo-1560953981-28e3bab4aab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzMxNzg1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  tractorImage = "https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMxNzg1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  values: Value[] = [
    {
      icon: 'award',
      title: 'Quality Excellence',
      description: 'We source and deliver only the highest quality industrial equipment from trusted global manufacturers.'
    },
    {
      icon: 'users',
      title: 'Customer Focus',
      description: 'Our dedicated team works closely with clients to understand their needs and provide tailored solutions.'
    },
    {
      icon: 'globe',
      title: 'Global Reach',
      description: 'Partnering with leading manufacturers worldwide to bring the best technology to our clients.'
    },
    {
      icon: 'trending-up',
      title: 'Innovation',
      description: 'Continuously adopting the latest technologies to improve efficiency and sustainability.'
    }
  ];

  stats: Stat[] = [
    { number: '25+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Satisfied Clients' },
    { number: '15,000+', label: 'Equipment Installed' },
    { number: '50+', label: 'Countries Served' }
  ];

  // Manejo de fallback de imagen
  handleImageError(event: any) {
    event.target.src = 'assets/fallback.png';
  }
}
