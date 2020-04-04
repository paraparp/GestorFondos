import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImportXMLService } from './import-xml.service';
import { ProductosService } from './productos.service';
import { DataSourceService } from './dataSource.service';
import { UsuarioService } from './usuario.service';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ImportXMLService,
    ProductosService,
    DataSourceService,
    UsuarioService,
    AuthenticationService
  ]
})
export class ServiceModule { }