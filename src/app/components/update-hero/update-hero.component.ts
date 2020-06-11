import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

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
      this.heroService.updateHero(this.id, data);
      this.onCompleted.emit();

      this.messageService.addMessage('you updated hero');
    }
  }
}
