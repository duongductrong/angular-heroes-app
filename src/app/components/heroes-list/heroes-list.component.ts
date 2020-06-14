import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/services/hero/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  update: {
    status: boolean;
    data: Hero;
  };

  constructor(
    private heroService: HeroService,
    private messageSerivce: MessageService
  ) {
    this.update = {
      status: false,
      data: { id: -1, name: '', damage: 0 },
    };
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onResetFormUpdate(): void {
    this.update = {
      status: false,
      data: { id: -1, name: '', damage: 0 },
    };
  }

  onUpdateHero(heroId): void {
    this.heroService.getHero(heroId).subscribe((hero) => {
      this.update = {
        data: { ...hero },
        status: true,
      };

      this.messageSerivce.addMessage('you open form update');
    });
  }

  onDeleteHero(heroId): void {
    this.heroService.deleteHero(heroId).subscribe((response) => {
      // check error
      if (response['status'] === 403 && response['error']) {
        alert(`${response['statusText']} - you need login`);
        console.warn(response['statusText'], 'error, you need to login');
        return;
      }

      // completed delete, sent message
      this.onResetFormUpdate();
      this.messageSerivce.addMessage('delete hero');

      // fake delete hero
      this.heroes = this.heroes.filter((hero) => hero.id !== heroId);
    });
  }

  onCompleteUpdated(heroUpdated): void {
    this.onResetFormUpdate();

    const index = this.heroes.findIndex((hero) => hero.id === heroUpdated.id);

    // fake update hero
    this.heroes = this.heroes.fill(heroUpdated, index, index + 1);
  }

  onCompleteCreated(newHero): any {
    // fake create hero
    this.heroes.push(newHero);
  }
}
