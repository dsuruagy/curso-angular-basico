import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-search',
  template: `
    <app-search-input (search)="onSearch($event)"></app-search-input>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let hero of heroes$ | async">
        <a routerLink="/heroes/{{ hero.id }}">
          {{ hero.name }}
        </a>
      </li>
</ul>
  `
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes$ = this.searchTerms.pipe(
      // aguardar meio segundo
      debounceTime(500),
      // se o que vier for igual ao termo anterior, nao faz nada
      distinctUntilChanged(),
      // buscar no backend
      switchMap(term => this.heroService.searchHeroes(term))
    );
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }
}
