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
      "Year":2022,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS5fd85iceH4N6MMAU14eR0DDUG-Id5uzhw&s"

    },
    {
      "productoID":2,
      "Modelo":"eveve",
      "Descripcion":"4 puertas",
      "Precio":22000,
      "Year":2021,
      "Marca":"Audi",
      "Color":"Rojo",
      "ImagenURL":"https://media.gettyimages.com/id/170450723/es/foto/coche-deportivos.jpg?s=612x612&w=gi&k=20&c=VzvXrzC-T8knSHzEVuYDm-qEowIi0XCJwlItcL_dW0Y="

    },
    {
      "productoID":3,
      "Modelo":"Trueno",
      "Descripcion":"2 puertas",
      "Precio":20000,
      "Year":1982,
      "Marca":"Toyota",
      "Color":"Blanco",
      "ImagenURL":"https://gascommunity.com/recordando-al-toyota-ae86-la-joya-del-drift/"

    }
  ]

}
