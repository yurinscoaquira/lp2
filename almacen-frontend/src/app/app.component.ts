import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaProductoComponent} from "./paginas/lista-producto/lista-producto.component";
import {FormProductoComponent} from "./paginas/form-producto/form-producto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductoComponent, FormProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'almacen-frontend';
}
