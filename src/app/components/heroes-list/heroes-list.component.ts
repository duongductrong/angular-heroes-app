import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/services/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
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
    this.heroes = this.heroService.getHeroes();
  }

  onResetFormUpdate(): void {
    this.update = {
      status: false,
      data: { id: -1, name: '', damage: 0 },
    };
  }

  onUpdateHero(heroId): void {
    let hero = this.heroService.getHero(heroId);

    if (hero) {
      this.update = {
        data: { ...hero },
        status: true,
      };

      this.messageSerivce.addMessage('you open form update');
    }
  }

  onDeleteHero(heroId): void {
    this.heroes = this.heroService.deleteHero(heroId);

    this.onResetFormUpdate();

    this.messageSerivce.addMessage('delete hero');
  }

  onCompleteUpdated(): void {
    this.onResetFormUpdate();
  }
}
