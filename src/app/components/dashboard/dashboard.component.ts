import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/services/hero/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    // get heroes and sort it
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.sort((heroA, heroB) =>
        heroA.damage - heroB.damage < 0 ? 1 : -1
      );
    });
  }

  ngOnInit(): void {}
}
