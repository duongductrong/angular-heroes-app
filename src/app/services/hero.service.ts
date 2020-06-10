import { Injectable } from '@angular/core';

import { HEROES } from 'src/app/mockapi/api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[];

  constructor() {}

  getHeroes(): any {
    this.heroes = HEROES;
  }

  getHero(id): any {
    return this.heroes.find((hero) => hero.id === id);
  }

  searchHero(name): any {
    return this.heroes.filter((hero) => {
      if (hero.name.indexOf(name) !== -1) {
        return hero;
      }
    });
  }

  deleteHero(id): any {
    return this.heroes.filter((hero) => hero.id !== id);
  }
}
