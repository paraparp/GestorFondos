import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PAGES_ROUTES } from './pages.routes';

import { TransactionsComponent } from './transactions/transactions.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserComponent } from './user/user.component';

import { MaterialModule } from '../shared/material/material.module';
import { PrimegnModule } from '../shared/primegn/primegn.module';

import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ElementsComponent } from '../components/elements/elements.component';
import { ModalComponent } from '../components/modal/modal.component';
import { TableEditComponent } from '../components/table-edit/table-edit.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { TableSymbolsPortfolioComponent } from '../components/table-symbols-portfolio/table-symbols-portfolio.component';
import { ChartComponent } from '../components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { Chart2Component } from '../components/chart0/chart2.component';


@NgModule({
  declarations: [
    PagesComponent,
    WatchlistComponent,
    UserComponent,
    TransactionsComponent,
    MovimientosComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ElementsComponent,
    ModalComponent,
    TableEditComponent,
    DialogComponent,
    TableSymbolsPortfolioComponent,
    ChartComponent,
    Chart2Component,

  ],
  imports: [
    FormsModule,
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    MaterialModule,
    PrimegnModule,
    TableModule,
    ChartsModule

  ],
  exports: [

    WatchlistComponent,
    UserComponent,
    MovimientosComponent

  ],
  providers: [],
  schemas: [],
  entryComponents: [
    ModalComponent
  ]
})
export class PagesModule { }
