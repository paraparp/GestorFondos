import { Component, OnInit } from '@angular/core';
import { Lot } from 'src/app/models/lot.model';
import { MatDialog } from '@angular/material/dialog';

import { SymbolsService } from 'src/app/services/symbols.service';
import { Symb } from 'src/app/models/symbol.model';
import { DialogSymbolComponent } from 'src/app/components/dialogs/dialog-symbol/dialog-symbol.component';
import { MorningstarService } from 'src/app/services/morningstar.service';


@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private symbolService: SymbolsService,
    private msService: MorningstarService
  ) { }

  lots: Lot[]
  symbols: Symb[];

  ngOnInit() {
    this.getSymbols();
    this.msService.getSymbs2('IE00B03HCZ61').subscribe((resp: any) => console.log(resp.items[0].fields[38]))
  }

  getSymbols() {
    this.symbolService.getSymbs().subscribe(
      resp => this.symbols = resp)
  }

  openDialog() {
    const dialog = this._dialog.open(DialogSymbolComponent, {
      width: "450px",
      disableClose: true,
      data: new Lot
    });
    dialog.afterClosed().subscribe(newSymbol => {
      if (newSymbol) {
        this.symbolService.save(newSymbol).subscribe(() => this.getSymbols())
      }
    });
  }
}
