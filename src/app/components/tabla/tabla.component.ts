import { Component, OnInit } from '@angular/core';

import { ProductosService } from 'src/app/services/productos.service';
import { ImportXMLService } from 'src/app/services/import-xml.service';

import { DataSourceService } from 'src/app/services/dataSource.service';
import { Operacion } from 'src/app/models/operacion.model';
import { Producto } from 'src/app/models/producto.model';





@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  operaciones: Operacion[]

  productos: Producto[];


  data: TreeNode[];
  cols: any[];


  constructor(
    public dataSource: DataSourceService,
    public productoService: ProductosService,
    public importxml: ImportXMLService
  ) { }



  ngOnInit() {

    this.operaciones = this.dataSource.getOperaciones();
    this.productos = this.dataSource.getProductos();

    // this.data = <TreeNode[]>this.dataSource.getOperaciones();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'precio', header: 'precio' },

    ];

    this.data = this.getData();

  }


  getData() {
    let tabla: TreeNode[] = [];

    this.productos.forEach(prod => {

      let prodTabla: TreeNode = {
        data: { id: prod.id, precio: this.productoService.precioMedioProductoEnCartera(prod.isin, '0') },
        children: <TreeNode[]>this.operaciones.filter(o => o.producto.id === prod.id),

      };
      tabla.push(prodTabla)
    });

    console.log(tabla)
    return tabla;

  }


}
export interface TreeNode {
  data?: any;
  children?: TreeNode[];
  leaf?: boolean;
  expanded?: boolean;
}


export class OperacionTabla {
  id: string;
  precio: number;
  participaciones: number;
}

export class ProductoTabla2 {

  data: Producto;

  children: Operacion[];

}