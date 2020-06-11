import { Injectable } from '@angular/core';

import { HEROES } from 'src/app/mockapi/api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = HEROES;

  constructor() {}

  getHeroes(): any {
    return this.heroes;
  }

  getHero(id): any {
    return this.heroes.find((hero) => hero.id === id);
  }

  getRankHeroes(): any {
    return [...this.heroes].sort((heroA, heroB) => {
      return heroA.damage - heroB.damage < 0 ? 1 : -1;
    });
  }

  addHero(data): any {
    let newHero = {
      ...data,
      id: Math.max(...this.heroes.map((el) => el.id)) + 1,
    };

    this.heroes.push(newHero);
  }

  updateHero(id, data): any {
    let heroIndex = this.heroes.findIndex((hero) => hero.id === id);

    if (heroIndex !== -1) {
      this.heroes.fill(data, heroIndex, heroIndex + 1);

      return this.heroes;
    }

    return false;
  }

  searchHero(name): any {
    return this.heroes.filter((hero) => {
      if (hero.name.indexOf(name) !== -1) {
        return hero;
      }
    });
  }

  deleteHero(id): any {
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
    return this.heroes;
  }
}
