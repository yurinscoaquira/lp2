import { Component } from '@angular/core';
import {ProductoService} from "../../servicio/producto.service";
import {Producto} from "../../modelo/Producto";

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  productos:Producto[]=[];
  constructor(private productoService: ProductoService) {
  }

  ngOnInit():void {
    this.productoService.findAll().subscribe(productos => this.productos = productos);
  }

}
