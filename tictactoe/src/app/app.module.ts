import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, SquareComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
