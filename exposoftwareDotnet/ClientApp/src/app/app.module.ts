import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InformacionComponent } from './informacion/informacion/informacion.component';
import { LoginComiteEvaluadorComponent } from './loginComiteEvaluador/login-comite-evaluador/login-comite-evaluador.component';
import { LoginDocenteEvaluadorComponent } from './loginDocenteEvaluador/login-docente-evaluador/login-docente-evaluador.component';
import { LoginLiderProyectoComponent } from './loginLiderProyecto/login-lider-proyecto/login-lider-proyecto.component';
import { DocenteRegistroComponent } from './inscripcion/docente-registro/docente-registro.component';
import { EstudianteRegistroComponent } from './inscripcion/estudiante-registro/estudiante-registro.component';
import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InformacionComponent,
    LoginComiteEvaluadorComponent,
    LoginDocenteEvaluadorComponent,
    LoginLiderProyectoComponent,
    DocenteRegistroComponent,
    EstudianteRegistroComponent,
    ProyectoRegistroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
