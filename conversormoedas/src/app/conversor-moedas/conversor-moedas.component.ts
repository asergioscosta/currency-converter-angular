import { Component, OnInit } from '@angular/core';
import { ConversorMoedasService } from './conversor-moedas.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.scss'],
})
export class ConversorMoedasComponent implements OnInit {
  valor: number = 1;
  moedaOrigem: string = 'USD';
  moedaDestino: string = 'BRL';
  resultado: number | null = null;
  moedas: string[] = [];
  historico: { valor: number; moedaOrigem: string; moedaDestino: string; resultado: number }[] = [];

  constructor(private conversorMoedasService: ConversorMoedasService) { }

  ngOnInit(): void {
    this.conversorMoedasService.getExchangeRates('USD').subscribe((data) => {
      this.moedas = Object.keys(data.conversion_rates);
    });
  }

  converter(): void {
    this.conversorMoedasService.getExchangeRates(this.moedaOrigem).subscribe((data) => {
      const taxa = data.conversion_rates[this.moedaDestino];
      this.resultado = this.valor * taxa;

      this.historico.push({
        valor: this.valor,
        moedaOrigem: this.moedaOrigem,
        moedaDestino: this.moedaDestino,
        resultado: this.resultado,
      });
    });
  }
}
