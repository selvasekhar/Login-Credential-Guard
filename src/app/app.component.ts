import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from './two/two.component';
import { AlertComponent } from "./alert/alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent,RouterLink, RouterLinkActive, TwoComponent, AlertComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merge';
}
