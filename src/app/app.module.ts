import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonMenuComponent } from './components/pokemon-menu/pokemon-menu.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonGetAllService } from './services/pokemon-get-all.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonMenuComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokemonGetAllService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
