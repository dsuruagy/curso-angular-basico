import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  itemsMenu: {text: string, path: string}[] = [
    {text: 'Heroes', path: "/heroes"},
    {text: 'Dashboard', path: "/dashboard"}
  ];

  constructor() {
    const token = localStorage.getItem('token');

    if (!token) {
      const randomToken = Math.random().toString(36).substring(-10);
      localStorage.setItem('token', randomToken);
    }
  }
}
