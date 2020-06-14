import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/services/hero/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
})
export class AddHeroComponent implements OnInit {
  name: string;
  damage: string;

  @Output() onCompleted: EventEmitter<any> = new EventEmitter();

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmitHero(data) {
    if (data.name && data.damage) {
      this.heroService.addHero(data).subscribe((newHero) => {
        // check error
        if (newHero['status'] === 403 && newHero['error']) {
          alert(`${newHero['statusText']} - you need login`);
          console.warn(newHero['statusText'], 'error, you need to login');
          return;
        }
        // created new hero, response new value next to session
        this.onCompleted.emit(newHero);
        this.name = '';
        this.damage = null;

        this.messageService.addMessage(`Add new hero NAME ${data.name}`);
      });
    }
  }
}
