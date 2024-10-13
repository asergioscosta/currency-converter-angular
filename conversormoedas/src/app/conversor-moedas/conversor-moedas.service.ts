import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConversorMoedasService {
    private apiUrl = 'https://v6.exchangerate-api.com/v6/53b5c6f81dbb41e687929924/latest/';

    constructor(private http: HttpClient) { }

    getExchangeRates(baseCurrency: string): Observable<any> {
        const url = `${this.apiUrl}${baseCurrency}`;
        return this.http.get<any>(url);
    }
}
