import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListagemMoedasComponent } from './listagem-moedas/listagem-moedas.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { HistoricoConversaoComponent } from './historico-conversao/historico-conversao.component';

import { HistoricoConversaoService } from './historico-conversao/historico-conversao.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    HeaderComponent,
    FooterComponent,
    ListagemMoedasComponent,
    ConversorMoedasComponent,
    HistoricoConversaoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    HistoricoConversaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }