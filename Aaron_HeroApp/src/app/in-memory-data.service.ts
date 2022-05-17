import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      {id: 20, name: 'Batman'},
      {id: 15, name: 'Cyborg'},
      {id: 77, name: 'Catwoman'},
      {id: 9, name: 'Robin'},
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Flash'},
      {id: 99, name: 'Green Lantern'},
      {id: 10, name: 'Wonder Woman'},
      {id: 21, name: 'Alfred'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0? 
    Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}
