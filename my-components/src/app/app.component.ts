import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GradientTransitionComponent } from './components/gradient-transition/gradient-transition.component';
import { IconLuminousComponent } from './components/icon-luminous/icon-luminous.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GradientTransitionComponent, IconLuminousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-components';
}
