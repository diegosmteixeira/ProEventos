import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

const routes: Routes = [
  { path: 'eventos' , component: EventosComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'palestrantes' , component: PalestrantesComponent},
  { path: 'perfil' , component: PerfilComponent},
  { path: 'contatos' , component: ContatosComponent},
  { path: 'evento-lista' , component: EventoListaComponent},
  { path: '' , redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**' , redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
