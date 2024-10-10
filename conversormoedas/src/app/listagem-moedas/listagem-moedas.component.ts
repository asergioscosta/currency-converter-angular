import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface ListagemMoedas {
  codigo: string;
  moeda: string;
  descricao: string;
}

const ELEMENT_DATA: ListagemMoedas[] = [
  { codigo: 'AED', moeda: 'Dirham dos Emirados Árabes Unidos', descricao: 'United Arab Emirates Dirham' },
  { codigo: 'AFN', moeda: 'Afgani do Afeganistão', descricao: 'Afghan Afghani' },
  { codigo: 'ALL', moeda: 'Lek Albanês', descricao: 'Albanian Lek' },
  { codigo: 'AMD', moeda: 'Drácula Armênio', descricao: 'Armenian Dram' },
  { codigo: 'ANG', moeda: 'Guilder das Antilhas Holandesas', descricao: 'Netherlands Antillean Guilder' },
  { codigo: 'AOA', moeda: 'Kwanza Angolano', descricao: 'Angolan Kwanza' },
  { codigo: 'ARS', moeda: 'Peso Argentino', descricao: 'Argentine Peso' },
  { codigo: 'AUD', moeda: 'Dólar Australiano', descricao: 'Australian Dollar' },
  { codigo: 'AWG', moeda: 'Florim Arubano', descricao: 'Aruban Florin' },
  { codigo: 'AZN', moeda: 'Manat Azerbaijano', descricao: 'Azerbaijani Manat' },
  { codigo: 'BAM', moeda: 'Marco Conversível Bósnio', descricao: 'Bosnia-Herzegovina Convertible Mark' },
  { codigo: 'BBD', moeda: 'Dólar Barbadense', descricao: 'Barbadian Dollar' },
  { codigo: 'BDT', moeda: 'Taka de Bangladesh', descricao: 'Bangladeshi Taka' },
  { codigo: 'BGN', moeda: 'Lev Búlgaro', descricao: 'Bulgarian Lev' },
  { codigo: 'BHD', moeda: 'Dinar do Bahrein', descricao: 'Bahraini Dinar' },
  { codigo: 'BIF', moeda: 'Franco Burundinense', descricao: 'Burundian Franc' },
  { codigo: 'BMD', moeda: 'Dólar de Bermudas', descricao: 'Bermudian Dollar' },
  { codigo: 'BND', moeda: 'Dólar de Brunei', descricao: 'Brunei Dollar' },
  { codigo: 'BOB', moeda: 'Boliviano', descricao: 'Bolivian Boliviano' },
  { codigo: 'BRL', moeda: 'Real Brasileiro', descricao: 'Brazilian Real' },
  { codigo: 'BSD', moeda: 'Dólar Bahamense', descricao: 'Bahamian Dollar' },
  { codigo: 'BTN', moeda: 'Ngultrum Butanês', descricao: 'Bhutanese Ngultrum' },
  { codigo: 'BWP', moeda: 'Pula Botswana', descricao: 'Botswana Pula' },
  { codigo: 'BYN', moeda: 'Rublo Bielorrusso', descricao: 'Belarusian Ruble' },
  { codigo: 'BZD', moeda: 'Dólar de Belize', descricao: 'Belize Dollar' },
  { codigo: 'CAD', moeda: 'Dólar Canadense', descricao: 'Canadian Dollar' },
  { codigo: 'CDF', moeda: 'Franco Congolês', descricao: 'Congolese Franc' },
  { codigo: 'CHF', moeda: 'Franco Suíço', descricao: 'Swiss Franc' },
  { codigo: 'CLP', moeda: 'Peso Chileno', descricao: 'Chilean Peso' },
  { codigo: 'CNY', moeda: 'Yuan Chinês', descricao: 'Chinese Yuan' },
  { codigo: 'COP', moeda: 'Peso Colombiano', descricao: 'Colombian Peso' },
  { codigo: 'CRC', moeda: 'Colón Costarriquenho', descricao: 'Costa Rican Colón' },
  { codigo: 'CUP', moeda: 'Peso Cubano', descricao: 'Cuban Peso' },
  { codigo: 'CUC', moeda: 'Peso Cubano Conversível', descricao: 'Cuban Convertible Peso' },
  { codigo: 'CZK', moeda: 'Coroa Checa', descricao: 'Czech Koruna' },
  { codigo: 'DKK', moeda: 'Coroa Dinamarquesa', descricao: 'Danish Krone' },
  { codigo: 'DOP', moeda: 'Peso Dominicano', descricao: 'Dominican Peso' },
  { codigo: 'DZD', moeda: 'Dinar Argelino', descricao: 'Algerian Dinar' },
  { codigo: 'EGP', moeda: 'Libra Egípcia', descricao: 'Egyptian Pound' },
  { codigo: 'ERN', moeda: 'Nakfa Eritreia', descricao: 'Eritrean Nakfa' },
  { codigo: 'ETB', moeda: 'Birr Etíope', descricao: 'Ethiopian Birr' },
  { codigo: 'EUR', moeda: 'Euro', descricao: 'Euro' },
  { codigo: 'FJD', moeda: 'Dólar Fijiano', descricao: 'Fijian Dollar' },
  { codigo: 'FKP', moeda: 'Libra das Ilhas Malvinas', descricao: 'Falkland Islands Pound' },
  { codigo: 'FOK', moeda: 'Coroa Faroense', descricao: 'Faroese Króna' },
  { codigo: 'GBP', moeda: 'Libra Esterlina', descricao: 'British Pound Sterling' },
  { codigo: 'GEL', moeda: 'Lari Georgiano', descricao: 'Georgian Lari' },
  { codigo: 'GGP', moeda: 'Libra de Guernsey', descricao: 'Guernsey Pound' },
  { codigo: 'GHS', moeda: 'Cedi Ghanense', descricao: 'Ghanaian Cedi' },
  { codigo: 'GIP', moeda: 'Libra de Gibraltar', descricao: 'Gibraltar Pound' },
  { codigo: 'GMD', moeda: 'Dalasi Gambiano', descricao: 'Gambian Dalasi' },
  { codigo: 'GNF', moeda: 'Franco Guineense', descricao: 'Guinean Franc' },
  { codigo: 'GTQ', moeda: 'Quetzal Guatemalteco', descricao: 'Guatemalan Quetzal' },
  { codigo: 'GYD', moeda: 'Dólar Guianense', descricao: 'Guyanese Dollar' },
  { codigo: 'HKD', moeda: 'Dólar de Hong Kong', descricao: 'Hong Kong Dollar' },
  { codigo: 'HNL', moeda: 'Lempira Hondurenha', descricao: 'Honduran Lempira' },
  { codigo: 'HRK', moeda: 'Coroa Croata', descricao: 'Croatian Kuna' },
  { codigo: 'HTG', moeda: 'Gourde Haitiano', descricao: 'Haitian Gourde' },
  { codigo: 'HUF', moeda: 'Forint Húngaro', descricao: 'Hungarian Forint' },
  { codigo: 'IDR', moeda: 'Rupia Indonésia', descricao: 'Indonesian Rupiah' },
  { codigo: 'ILS', moeda: 'Shekel Novo Israelense', descricao: 'Israeli New Sheqel' },
  { codigo: 'IMP', moeda: 'Libra de Ilha de Man', descricao: 'Isle of Man Pound' },
  { codigo: 'INR', moeda: 'Rúpia Indiana', descricao: 'Indian Rupee' },
  { codigo: 'IQD', moeda: 'Dinar Iraquiano', descricao: 'Iraqi Dinar' },
  { codigo: 'IRR', moeda: 'Rial Iraniano', descricao: 'Iranian Rial' },
  { codigo: 'ISK', moeda: 'Coroa Islandesa', descricao: 'Icelandic Króna' },
  { codigo: 'JEP', moeda: 'Libra de Jersey', descricao: 'Jersey Pound' },
  { codigo: 'JMD', moeda: 'Dólar Jamaicano', descricao: 'Jamaican Dollar' },
  { codigo: 'JPY', moeda: 'Iene Japonês', descricao: 'Japanese Yen' },
  { codigo: 'KES', moeda: 'Xelim Queniano', descricao: 'Kenyan Shilling' },
  { codigo: 'KGS', moeda: 'Som Quirguiz', descricao: 'Kyrgyzstani Som' },
  { codigo: 'KHR', moeda: 'Riel Cambojano', descricao: 'Cambodian Riel' },
  { codigo: 'KPW', moeda: 'Won Norte-Coreano', descricao: 'North Korean Won' },
  { codigo: 'KRW', moeda: 'Won Sul-Coreano', descricao: 'South Korean Won' },
  { codigo: 'KWD', moeda: 'Dinar Kuwaitiano', descricao: 'Kuwaiti Dinar' },
  { codigo: 'KYD', moeda: 'Dólar das Ilhas Cayman', descricao: 'Cayman Islands Dollar' },
  { codigo: 'KZT', moeda: 'Tenge Cazaque', descricao: 'Kazakhstani Tenge' },
  { codigo: 'LAK', moeda: 'Kip Laociano', descricao: 'Lao Kip' },
  { codigo: 'LBP', moeda: 'Libra Libanesa', descricao: 'Lebanese Pound' },
  { codigo: 'LKR', moeda: 'Rúpia do Sri Lanka', descricao: 'Sri Lankan Rupee' },
  { codigo: 'LRD', moeda: 'Dólar Liberiano', descricao: 'Liberian Dollar' },
  { codigo: 'LSL', moeda: 'Loti Lesotense', descricao: 'Lesotho Loti' },
  { codigo: 'LYD', moeda: 'Dinar Líbio', descricao: 'Libyan Dinar' },
  { codigo: 'MAD', moeda: 'Dirham Marroquino', descricao: 'Moroccan Dirham' },
  { codigo: 'MDL', moeda: 'Leu Moldavo', descricao: 'Moldovan Leu' },
  { codigo: 'MGA', moeda: 'Ariary Malgaxe', descricao: 'Malagasy Ariary' },
  { codigo: 'MKD', moeda: 'Dinar Macedônio', descricao: 'Macedonian Denar' },
  { codigo: 'MMK', moeda: 'Kyat Myanmar', descricao: 'Myanmar Kyat' },
  { codigo: 'MNT', moeda: 'Tugrik Mongol', descricao: 'Mongolian Tögrög' },
  { codigo: 'MOP', moeda: 'Pataca de Macau', descricao: 'Macanese Pataca' },
  { codigo: 'MRU', moeda: 'Ouguiya Mauritano', descricao: 'Mauritanian Ouguiya' },
  { codigo: 'MUR', moeda: 'Rúpia Mauriciana', descricao: 'Mauritian Rupee' },
  { codigo: 'MVR', moeda: 'Rúpia Maldiva', descricao: 'Maldivian Rufiyaa' },
  { codigo: 'MWK', moeda: 'Kwacha Malauiano', descricao: 'Malawian Kwacha' },
  { codigo: 'MXN', moeda: 'Peso Mexicano', descricao: 'Mexican Peso' },
  { codigo: 'MYR', moeda: 'Ringgit Malaio', descricao: 'Malaysian Ringgit' },
  { codigo: 'MZN', moeda: 'Metical Moçambicano', descricao: 'Mozambican Metical' },
  { codigo: 'NAD', moeda: 'Dólar da Namíbia', descricao: 'Namibian Dollar' },
  { codigo: 'NGN', moeda: 'Naira Nigeriana', descricao: 'Nigerian Naira' },
  { codigo: 'NIO', moeda: 'Córdoba Nicaraguense', descricao: 'Nicaraguan Córdoba' },
  { codigo: 'NOK', moeda: 'Coroa Norueguesa', descricao: 'Norwegian Krone' },
  { codigo: 'NPR', moeda: 'Rúpia Nepalesa', descricao: 'Nepalese Rupee' },
  { codigo: 'NZD', moeda: 'Dólar Neozelandês', descricao: 'New Zealand Dollar' },
  { codigo: 'OMR', moeda: 'Rial Omanense', descricao: 'Omani Rial' },
  { codigo: 'PAB', moeda: 'Balboa Panamenho', descricao: 'Panamanian Balboa' },
  { codigo: 'PEN', moeda: 'Sol Peruano', descricao: 'Peruvian Sol' },
  { codigo: 'PGK', moeda: 'Kina da Papua Nova Guiné', descricao: 'Papua New Guinean Kina' },
  { codigo: 'PHP', moeda: 'Peso Filipino', descricao: 'Philippine Peso' },
  { codigo: 'PKR', moeda: 'Rúpia Paquistanesa', descricao: 'Pakistani Rupee' },
  { codigo: 'PLN', moeda: 'Zloty Polonês', descricao: 'Polish Zloty' },
  { codigo: 'PYG', moeda: 'Guarani Paraguaio', descricao: 'Paraguayan Guarani' },
  { codigo: 'QAR', moeda: 'Rial Catarense', descricao: 'Qatari Rial' },
  { codigo: 'RON', moeda: 'Leu Romeno', descricao: 'Romanian Leu' },
  { codigo: 'RSD', moeda: 'Dinar Sérvio', descricao: 'Serbian Dinar' },
  { codigo: 'RUB', moeda: 'Rublo Russo', descricao: 'Russian Ruble' },
  { codigo: 'RWF', moeda: 'Franco Ruandense', descricao: 'Rwandan Franc' },
  { codigo: 'SAR', moeda: 'Riyal Saudita', descricao: 'Saudi Riyal' },
  { codigo: 'SBD', moeda: 'Dólar das Ilhas Salomão', descricao: 'Solomon Islands Dollar' },
  { codigo: 'SCR', moeda: 'Rúpia das Seychelles', descricao: 'Seychellois Rupee' },
  { codigo: 'SDG', moeda: 'Libra Sudanesa', descricao: 'Sudanese Pound' },
  { codigo: 'SEK', moeda: 'Coroa Sueca', descricao: 'Swedish Krona' },
  { codigo: 'SGD', moeda: 'Dólar de Singapura', descricao: 'Singapore Dollar' },
  { codigo: 'SHP', moeda: 'Libra de Santa Helena', descricao: 'Saint Helena Pound' },
  { codigo: 'SLL', moeda: 'Leone da Serra Leoa', descricao: 'Sierra Leonean Leone' },
  { codigo: 'SOS', moeda: 'Xelim Somali', descricao: 'Somali Shilling' },
  { codigo: 'SRD', moeda: 'Dólar Surinamês', descricao: 'Surinamese Dollar' },
  { codigo: 'SSP', moeda: 'Libra Sul-Sudanesa', descricao: 'South Sudanese Pound' },
  { codigo: 'STN', moeda: 'Dobra de São Tomé e Príncipe', descricao: 'São Tomé and Príncipe Dobra' },
  { codigo: 'SYP', moeda: 'Libra Síria', descricao: 'Syrian Pound' },
  { codigo: 'SZL', moeda: 'Lilangeni Suázi', descricao: 'Swazi Lilangeni' },
  { codigo: 'THB', moeda: 'Baht Tailandês', descricao: 'Thai Baht' },
  { codigo: 'TJS', moeda: 'Somoni Tajique', descricao: 'Tajikistani Somoni' },
  { codigo: 'TMT', moeda: 'Manat do Turcomenistão', descricao: 'Turkmenistani Manat' },
  { codigo: 'TND', moeda: 'Dinar Tunisiano', descricao: 'Tunisian Dinar' },
  { codigo: 'TOP', moeda: 'Paʻanga de Tonga', descricao: 'Tongan Paʻanga' },
  { codigo: 'TRY', moeda: 'Lira Turca', descricao: 'Turkish Lira' },
  { codigo: 'TTD', moeda: 'Dólar de Trinidad e Tobago', descricao: 'Trinidad and Tobago Dollar' },
  { codigo: 'TWD', moeda: 'Dólar Novo Taiwanês', descricao: 'New Taiwan Dollar' },
  { codigo: 'TZS', moeda: 'Xelim da Tanzânia', descricao: 'Tanzanian Shilling' },
  { codigo: 'UAH', moeda: 'Hryvnia Ucraniana', descricao: 'Ukrainian Hryvnia' },
  { codigo: 'UGX', moeda: 'Xelim Ugandense', descricao: 'Ugandan Shilling' },
  { codigo: 'USD', moeda: 'Dólar Americano', descricao: 'United States Dollar' },
  { codigo: 'UYU', moeda: 'Peso Uruguaio', descricao: 'Uruguayan Peso' },
  { codigo: 'UZS', moeda: 'Som Uzbeque', descricao: 'Uzbekistani Som' },
  { codigo: 'VES', moeda: 'Bolívar Soberano', descricao: 'Sovereign Bolívar' },
  { codigo: 'VND', moeda: 'Dong Vietnamita', descricao: 'Vietnamese Dong' },
  { codigo: 'VUV', moeda: 'Vatu de Vanuatu', descricao: 'Vanuatu Vatu' },
  { codigo: 'WST', moeda: 'Tala Samoano', descricao: 'Samoan Tala' },
  { codigo: 'XAF', moeda: 'Franco CFA da África Central', descricao: 'Central African CFA Franc' },
  { codigo: 'XAG', moeda: 'Prata', descricao: 'Silver' },
  { codigo: 'XAU', moeda: 'Ouro', descricao: 'Gold' },
  { codigo: 'XCD', moeda: 'Dólar do Caribe Oriental', descricao: 'East Caribbean Dollar' },
  { codigo: 'XDR', moeda: 'Direitos Especiais de Saque', descricao: 'Special Drawing Rights' },
  { codigo: 'XOF', moeda: 'Franco CFA Ocidental', descricao: 'West African CFA Franc' },
  { codigo: 'XPF', moeda: 'Franco CFP', descricao: 'CFP Franc' },
  { codigo: 'YER', moeda: 'Rial Yemenita', descricao: 'Yemeni Rial' },
  { codigo: 'ZAR', moeda: 'Rand Sul-Africano', descricao: 'South African Rand' },
  { codigo: 'ZMW', moeda: 'Kwacha Zambiano', descricao: 'Zambian Kwacha' },
  { codigo: 'ZWL', moeda: 'Dólar do Zimbábue', descricao: 'Zimbabwean Dollar' },
];

@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.scss'],
})

export class ListagemMoedasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['codigo', 'moeda', 'descricao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
