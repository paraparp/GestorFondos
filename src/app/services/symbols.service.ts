import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map } from 'rxjs/operators';

import { Symb } from '@model/symbol.model';

import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  getSymbs() {
    let url = URL_SERVICIOS + '/symbols/';
    console.log(url)
    return this.http.get<Symb[]>(url)
  }

  getManagers() {
    let url = URL_SERVICIOS + '/symbols/managers';
    console.log(url)
    return this.http.get<Symb[]>(url)
  }
  getTypes() {
    let url = URL_SERVICIOS + '/symbols/types';
    console.log(url)
    return this.http.get<Symb[]>(url)
  }
  searchByIsin(isin: string) {
    let url = URL_SERVICIOS + '/symbols/search/' + isin;
    console.log(url)
    return this.http.get<Symb>(url)
  }

  getPriceByDate(isin: string, date: string) {

    let url = URL_SERVICIOS + '/symbols/' + isin + '/price?date=' + date;
    console.log(url)
    return this.http.get<number>(url)
  }


  edit(symbol: Symb) {
    let url = URL_SERVICIOS + '/symbols/';
    console.log(url)
    return this.http.patch<Symb>(url, symbol).pipe(
      map((resp: any) => {

        this.snackBar.open('Symbol edited: OK!', 'Close', {
          duration: 4000,
        });
      }))
  }

  save(symbol: Symb) {
    let url = URL_SERVICIOS + '/symbols/';
    console.log(url)
    return this.http.post<Symb>(url, symbol).pipe(
      map((resp: any) => {

        this.snackBar.open('New symbol added: ' + symbol.name, null, {
          duration: 4000,
        });
      }))
  }
}
