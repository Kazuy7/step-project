import { Component } from '@angular/core';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-home-school',
  templateUrl: './home-school.component.html',
  styleUrls: ['./home-school.component.css']
})
export class HomeSchoolComponent {
  school?: School;
}
