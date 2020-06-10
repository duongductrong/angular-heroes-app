import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeoresListComponent } from './components/heores-list/heores-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeoresListComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
