import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  Projects =[
  {
      title: 'Portfolio',
      description: 'A personal portfolio website built using Angular 20 and Bootstrap 5.',
      github: 'https://github.com/yourname/angular-portfolio',
      demo: 'https://yourportfolio.vercel.app',
      image: 'assets/project1.jpg'
    },
    {
      title: 'To-Do App',
      description: 'A simple to-do list with add/remove tasks using Angular standalone components.',
      github: 'https://github.com/yourname/angular-todo',
      demo: '',
      image: '',
    },
    {
      title: 'Weather App',
      description: 'Fetches weather data using API and displays temperature with icons.',
      github: 'https://github.com/yourname/weather-app',
      demo: 'https://weatherapp.netlify.app',
      image: ''
    }
    ]
}

