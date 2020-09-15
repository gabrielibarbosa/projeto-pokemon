import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonGetAllService } from './services/pokemon-get-all.service';
import { PokemonGetByIdService } from './services/pokemon-get-by-id.service';
import { PokemonGetFormService } from './services/pokemon-get-form.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokemonGetAllService,
    PokemonGetByIdService,
    PokemonGetFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
