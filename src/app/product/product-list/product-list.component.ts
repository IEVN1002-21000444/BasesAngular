import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:any[]=[
    {
      "productoID":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":20000,
      "year":2022,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenURL":""

    },
    {
      "productoID":2,
      "Modelo":"eveve",
      "Descripcion":"4 puertas",
      "Precio":22000,
      "year":2021,
      "Marca":"Audi",
      "Color":"Rojo",
      "ImagenURL":""

    },
    {
      "productoID":3,
      "Modelo":"Trueno",
      "Descripcion":"2 puertas",
      "Precio":20000,
      "year":1982,
      "Marca":"Toyota",
      "Color":"Blanco",
      "ImagenURL":""

    }
  ]

}
