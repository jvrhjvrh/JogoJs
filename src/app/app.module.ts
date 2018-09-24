import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerPersonagemComponent } from './ver-personagem/ver-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    VerPersonagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
