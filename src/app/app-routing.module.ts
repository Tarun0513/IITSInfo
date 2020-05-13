import { VaranasiComponent } from './varanasi/varanasi.component';
import { RoorkeeComponent } from './roorkee/roorkee.component';
import { KharagpurComponent } from './kharagpur/kharagpur.component';
import { KanpurComponent } from './kanpur/kanpur.component';
import { IndoreComponent } from './indore/indore.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { GuwahatiComponent } from './guwahati/guwahati.component';
import { BombayComponent } from './bombay/bombay.component';
import { DelhiComponent } from './delhi/delhi.component';
import { MadrasComponent } from './madras/madras.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',redirectTo:'roorkee',pathMatch:"full"
  },
  {
     path:'iitm',component:MadrasComponent
  },
  {
    path:'delhi',component:DelhiComponent
  },
  {
    path:'bombay',component:BombayComponent
  },
  {
    path:'guwahati',component:GuwahatiComponent
  },
  {
    path:'hyd',component:HyderabadComponent
  },
  {
    path:'indore',component:IndoreComponent
  },
  {
    path:'kanpur',component:KanpurComponent
  },
  {
    path:'khar',component:KharagpurComponent
  },
  {
    path:'roorkee',component:RoorkeeComponent
  },
  {
    path:'varanasi',component:VaranasiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
