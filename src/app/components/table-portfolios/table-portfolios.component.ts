import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-portfolios',
  templateUrl: './table-portfolios.component.html',
  styleUrls: ['./table-portfolios.component.css']
})
export class TablePortfoliosComponent {

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input()
  portfolios: Portfolio[];
  @Output()
  delete = new EventEmitter();
  @Output()
  dialog = new EventEmitter();

  displayedColumns = ['name', 'cost', 'value', 'variation', 'list', 'edit'];

  dataSource: MatTableDataSource<Portfolio>;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.portfolios)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }


  onDelete(portfolio: Portfolio) {
    this.delete.emit(portfolio);
  }
  openDialog(portfolio: Portfolio) {
    this.dialog.emit(portfolio);
  }


}
