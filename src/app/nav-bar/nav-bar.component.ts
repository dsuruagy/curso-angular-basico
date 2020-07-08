import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public isMenuCollapsed = true;

  @Input() title: string;
  @Input() navItems: {text: string, path: string}[];
}
