import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.log('Obtida a lista de Heróis.')

    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`Obtido o herói de id=${id}`);

    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
