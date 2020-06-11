import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { HeroService } from './services/hero.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesListComponent,
    DashboardComponent,
    TopBarComponent,
    NotFoundComponent,
    MessagesComponent,
    HeroesListComponent,
    AddHeroComponent,
    UpdateHeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
