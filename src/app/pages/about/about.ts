import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-angular'; 
import { Title } from '@angular/platform-browser';


interface Value {
  icon: any; // ruta o nombre de icono SVG inline
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

  constructor(private titleService: Title){}

  ngOnInit(): void{
    this.titleService.setTitle(
      'WMüller | About Us'
    )
  }
  
  teamImage = "assets/images/about/team.webp";
  warehouseImage = "assets/images/about/ware_house.webp";
  tractorImage = "assets/images/about/tractor.webp";

  values: Value[] = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source and deliver only the highest quality industrial equipment from trusted global manufacturers.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our dedicated team works closely with clients to understand their needs and provide tailored solutions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Partnering with leading manufacturers worldwide to bring the best technology to our clients.'
    },
    {
      icon: TrendingUp,
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
