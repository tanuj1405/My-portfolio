import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations:[
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
       ])
    ])
  ]
})
export class App {
  protected title = 'My-portfolio';
    prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
