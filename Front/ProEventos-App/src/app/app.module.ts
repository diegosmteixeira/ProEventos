import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule  } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { NgxCurrencyModule } from 'ngx-currency';

import { EventoService } from './services/evento.service';
import { LoteService } from './services/lote.service';
import { UserService } from './services/user.service';

import { JwtInterceptor } from './interceptors/jwt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { NavComponent } from './shared/nav/nav.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { EventoDetalheComponent } from './components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HomeComponent } from './components/home/home.component';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventosComponent,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    PalestrantesComponent,
    TituloComponent,
    DateTimeFormatPipe,
    EventoDetalheComponent,
    EventoListaComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule,
    TooltipModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxCurrencyModule,
    PaginationModule.forRoot()
  ],
  providers: [
    EventoService,
    LoteService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
