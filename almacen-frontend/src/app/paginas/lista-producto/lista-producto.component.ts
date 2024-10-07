import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../servicio/producto.service";
import {Producto} from "../../modelo/Producto";
import {ProductoRepor} from "../../modelo/ProductoRepor";

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {
  productos:ProductoRepor[]=[];
  constructor(private productoService: ProductoService) {
  }

  ngOnInit():void {
    //this.productoService.findAll().subscribe(productos => this.productos = productos);
    this.productoService.findAll();
    this.productoService.productos$.subscribe(data=>{this.productos=data;});
  }

  eliminar(id:number){
    if(confirm("Desea eliminar?")){
      this.productoService.delete(id).subscribe();
    }
  }

  cargarProducto(producto:ProductoRepor){
    this.productoService.seleccionarProducto(producto);
  }

}
