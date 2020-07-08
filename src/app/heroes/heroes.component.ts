import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
      id: 1,
      name: 'Hulk'
  };

  selectedHero : Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }
}
