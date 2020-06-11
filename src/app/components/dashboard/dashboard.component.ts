import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/services/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getRankHeroes();
  }

  ngOnInit(): void {}
}
