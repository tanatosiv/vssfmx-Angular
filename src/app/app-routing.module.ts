import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { HttpModule } from '@angular/http';
//aqui se ponen los modulos para el ruteo


import {MainComponent} from './main/main.component';
// import {NavComponent} from './nav/nav.component';
// import {BarraSocialComponent} from './barra-social/barra-social.component';
import {QsomosComponent} from './qsomos/qsomos.component';
import {ProyectosComponent} from './proyectos/proyectos.component';
import {VoluntariosComponent} from './voluntarios/voluntarios.component';
import {SeVoluntarioComponent} from './se-voluntario/se-voluntario.component';
import {AlianzasComponent} from './alianzas/alianzas.component';

const routes: Routes = [
  {
    path: 'main', 
    component: MainComponent
  },
  {
    path:'quienes-somos', 
    component: QsomosComponent
  },
  {
    path:'proyectos',
    component: ProyectosComponent
  },
  {
    path:'voluntarios',
    component: VoluntariosComponent
  },
  {
    path:'alianzas',
    component: AlianzasComponent
  },
  {
    path:'sevoluntario',
    component: SeVoluntarioComponent
  },

  { path: 'home', redirectTo: '/main', pathMatch: 'full' }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]

  // declarations: []
})
export class AppRoutingModule { }
