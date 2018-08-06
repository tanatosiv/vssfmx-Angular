import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { QsomosComponent } from './qsomos/qsomos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { VoluntariosComponent } from './voluntarios/voluntarios.component';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { SeVoluntarioComponent } from './se-voluntario/se-voluntario.component';
import { BarraSocialComponent } from './barra-social/barra-social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    QsomosComponent,
    ProyectosComponent,
    VoluntariosComponent,
    AlianzasComponent,
    SeVoluntarioComponent,
    BarraSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
