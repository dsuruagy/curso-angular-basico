import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Herói selecionado com id=${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
