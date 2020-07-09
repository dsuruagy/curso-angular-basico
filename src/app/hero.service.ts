import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = HEROES;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Obtida a lista de Heróis.')
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Obtido o herói de id=${id}`);
    return of(this.heroes.find(hero => hero.id === id));
  }
}
