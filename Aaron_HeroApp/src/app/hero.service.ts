import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes.')),
      catchError(this.handleError<Hero[]>('getHeroes', [])))
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error)
      this.log('uh oh, you FAILED...')
      return of(result as T)
    }
  }

  getHero(id : number): Observable<Hero>{
    const url = 'api/heroes/' + id
    console.log(url)
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.log('fetched hero with id=${id}')),
      catchError(this.handleError<Hero>('getHero id =${id}')))
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log('updated hero')),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log('added new hero')),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  deleteHero(id: number): Observable<Hero>{
    const url = 'api/heroes'+id
    return this.http.delete<Hero>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log('hero deleted')),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()){
      return of([])
    }
    const url = 'api/heroes/?name='+term
    return this.http.get<Hero[]>(url)
    .pipe(
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }

  private log(message: string){
    this.messageService.add('HeroService: ' + message)
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
}
