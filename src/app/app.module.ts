import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerPersonagemComponent } from './ver-personagem/ver-personagem.component';
import { LoggingComponent } from './logging/logging.component';
import { MapaComponent } from './mapa/mapa.component';
import { BrigaComponent } from './briga/briga.component';

@NgModule({
  declarations: [
    AppComponent,
    VerPersonagemComponent,
    LoggingComponent,
    MapaComponent,
    BrigaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
