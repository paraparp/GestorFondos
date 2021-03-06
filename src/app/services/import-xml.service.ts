import { Injectable } from '@angular/core';
import { Symb } from '@model/symbol.model';

@Injectable({
  providedIn: 'root'
})
export class ImportXMLService {

  constructor() { }



  extraerPrecio(url: string, valor: string) {


    if (valor === 'precioActual') {

      return this.extractDataFromUrl(url, 'priceText__1853e8a5')
    }
    else {
      return 0;
    }

  }

  extractDataFromUrl(url: string, classSpan: string) {

    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.send(null);

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(req.responseText, "text/html");
    var res = xmlDoc.evaluate(`//span[@class="${classSpan}"]`, xmlDoc, null, XPathResult.STRING_TYPE, null);

    //span[@class="priceText__1853e8a5"
    return res.stringValue;
  }

  extractDataFromUrlXPATH(url: string, xpath: string) {

    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.send(null);

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(req.responseText, "text/html");
    var res = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.STRING_TYPE, null);

    return res.stringValue;
  }

  extractDataTransaction(url: string, producto: Symb) {

    var req = new XMLHttpRequest();
    req.open("GET", url + producto.isin, false);
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.send(null);

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(req.responseText, "text/html");

    let precioActual = xmlDoc.evaluate("//span[@class='mod-ui-data-list__value']", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
    let fechaActualizacion = xmlDoc.evaluate("//div[@class='mod-disclaimer']", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;

    let datoTransactionUrl: ProductDataUrl = { producto, precioActual, fechaActualizacion };

    return datoTransactionUrl;
  }



}

export class ProductDataUrl {

  producto: Symb;
  precioActual: any;
  fechaActualizacion: string;


}
