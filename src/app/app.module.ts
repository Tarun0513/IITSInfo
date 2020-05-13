import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { MadrasComponent } from './madras/madras.component';
import { DelhiComponent } from './delhi/delhi.component';
import { BombayComponent } from './bombay/bombay.component';
import { KharagpurComponent } from './kharagpur/kharagpur.component';
import { KanpurComponent } from './kanpur/kanpur.component';
import { RoorkeeComponent } from './roorkee/roorkee.component';
import { GuwahatiComponent } from './guwahati/guwahati.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { VaranasiComponent } from './varanasi/varanasi.component';
import { IndoreComponent } from './indore/indore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    MadrasComponent,
    DelhiComponent,
    BombayComponent,
    KharagpurComponent,
    KanpurComponent,
    RoorkeeComponent,
    GuwahatiComponent,
    HyderabadComponent,
    VaranasiComponent,
    IndoreComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
