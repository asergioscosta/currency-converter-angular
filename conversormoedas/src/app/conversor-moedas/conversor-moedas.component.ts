import { Component, OnInit } from '@angular/core';
import { ConversorMoedasService } from './conversor-moedas.service';
import { HistoricoConversaoService, Conversao } from '../historico-conversao/historico-conversao.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.scss'],
})
export class ConversorMoedasComponent implements OnInit {
  historico: Conversao[] = [];
  valor: number = 1;
  moedaOrigem: string = 'USD';
  moedaDestino: string = 'BRL';
  resultado: number | null = null;
  moedas: string[] = [];
  taxa: number | undefined;

  constructor(
    private conversorMoedasService: ConversorMoedasService,
    private historicoService: HistoricoConversaoService
  ) { }

  ngOnInit(): void {
    this.conversorMoedasService.getExchangeRates('USD').subscribe((data) => {
      this.moedas = Object.keys(data.conversion_rates);
    });
  }

  converter(): void {
    this.conversorMoedasService.getExchangeRates(this.moedaOrigem).subscribe((data) => {
      const taxa = data.conversion_rates[this.moedaDestino];
      this.resultado = this.valor * taxa;
      this.taxa = taxa;

      const agora = new Date();
      const conversao: Conversao = {
        data: agora.toLocaleDateString(),
        hora: agora.toLocaleTimeString(),
        valor: this.valor,
        moedaOrigem: this.moedaOrigem,
        moedaDestino: this.moedaDestino,
        taxa: taxa,
        resultado: this.resultado,
      };

      this.historicoService.adicionarConversao(conversao);
    });
  }
}  