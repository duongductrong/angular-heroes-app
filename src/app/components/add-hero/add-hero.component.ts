import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/services/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
})
export class AddHeroComponent implements OnInit {
  name: string;
  damage: string;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmitHero(data) {
    if (data.name && data.damage) {
      this.heroService.addHero(data);
      this.messageService.addMessage(`Add new hero NAME ${data.name}`);
    }
  }
}
