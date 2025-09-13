import { Component } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {

}
