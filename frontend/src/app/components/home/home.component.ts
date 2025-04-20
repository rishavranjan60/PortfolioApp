import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // No more router here
  titles: string[] = [
    'React Developer',
    'MERN/MEAN Stack Expert',
    'Frontend Specialist',
    'NodeJS Expert',
    'FullStack Developer'
  ];
}
