import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')}),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log('Obtida a lista de Heróis.')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Obtido o herói de id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  // PUT /heroes/1
  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`

    return this.http.put<Hero>(url, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Atualizado o herói de id=${hero.id}`)),
        catchError(this.handleError<Hero>(`updateHero id=${hero.id}`))
      );
  }

  // POST /heroes
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(newHero => this.log(`Adicionado o herói de id=${newHero.id}`)),
        catchError(this.handleError<Hero>(`addHero id=${hero.id}`))
      );
  }

  // DELETE /heroes/id
  deleteHero(hero: Hero): Observable<any> { // any, pois não retorna um Hero
    const url = `${this.heroesUrl}/${hero.id}`

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Apagado o herói de id=${hero.id}`)),
        catchError(this.handleError<Hero>(`deleteHero id=${hero.id}`))
      );
  }

  // GET /heroes/?name=term
  searchHeroes(term: string): Observable<Hero[]> {
    if(!(term && term.trim())) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`, this.httpOptions)
      .pipe(
        tap(heroes => {
          heroes && heroes.length
            ? this.log(`Encontrado  termo=${term} e ${heroes.length} heróis`)
            : this.log(`não encontrado o termo ${term}`)
        }),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed. Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
