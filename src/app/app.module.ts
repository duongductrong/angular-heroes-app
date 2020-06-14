import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { HeroService } from './services/hero/hero.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesListComponent,
    DashboardComponent,
    TopBarComponent,
    NotFoundComponent,
    MessagesComponent,
    AddHeroComponent,
    UpdateHeroComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [HeroService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
