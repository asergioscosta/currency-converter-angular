import { Component, OnInit, OnDestroy } from '@angular/core';
import { HistoricoConversaoService, Conversao } from './historico-conversao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historico-conversao',
  templateUrl: './historico-conversao.component.html',
  styleUrls: ['./historico-conversao.component.scss']
})
export class HistoricoConversaoComponent implements OnInit, OnDestroy {
  historico: Conversao[] = [];
  limiteAltoValor: number = 1000;
  private historicoSubscription!: Subscription;

  limparHistorico(): void {
    this.historicoService.limparHistorico();
  }
  
  constructor(private historicoService: HistoricoConversaoService) { }

  ngOnInit(): void {
    this.historicoSubscription = this.historicoService.getHistoricoObservable()
      .subscribe(historico => {
        this.historico = historico;
      });
  }

  ngOnDestroy(): void {
    if (this.historicoSubscription) {
      this.historicoSubscription.unsubscribe();
    }
  }

  excluirConversao(index: number): void {
    this.historicoService.excluirConversao(index);
  }

  conversoesAltoValor(): Conversao[] {
    return this.historicoService.getConversoesAltoValor(this.limiteAltoValor);
  }
}