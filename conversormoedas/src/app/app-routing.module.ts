import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListagemMoedasComponent } from './listagem-moedas/listagem-moedas.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';

const routes: Routes = [
  { path: "", redirectTo: 'pagina-inicial', pathMatch: 'full' },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "footer", component: FooterComponent },
  { path: "header", component: HeaderComponent },
  { path: "listagem-moedas", component: ListagemMoedasComponent },
  { path: "conversor-moedas", component: ConversorMoedasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
