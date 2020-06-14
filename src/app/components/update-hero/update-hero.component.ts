import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.scss'],
})
export class UpdateHeroComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() damage;

  @Output() onCompleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    console.log(this.name, this.damage);
  }

  ngOnInit(): void {}

  onSubmitUpdate(data): void {
    data.damage = Number(data.damage);

    if (data.name && data.damage) {
      this.heroService.updateHero(this.id, data).subscribe((heroUpdated) => {
        // check error
        if (heroUpdated['status'] === 403 && heroUpdated['error']) {
          alert(`${heroUpdated['statusText']} - you need login`);
          console.warn(heroUpdated['statusText'], 'error, you need to login');
          return;
        }

        // completed update, sent message
        this.onCompleted.emit(heroUpdated);

        this.messageService.addMessage('you updated hero');
      });
    }
  }
}
