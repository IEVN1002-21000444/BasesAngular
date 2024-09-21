import { Component } from '@angular/core';
import { Productos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imagewidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg
  }

  productos:Productos[]=[
    {
      "productoID":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":20000,
      "Year":"Enero 04 2020",
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS5fd85iceH4N6MMAU14eR0DDUG-Id5uzhw&s"

    },
    {
      "productoID":2,
      "Modelo":"eveve",
      "Descripcion":"4 puertas",
      "Precio":22000,
      "Year":"Julio 02 2020",
      "Marca":"Audi",
      "Color":"Rojo",
      "ImagenURL":"https://media.gettyimages.com/id/170450723/es/foto/coche-deportivos.jpg?s=612x612&w=gi&k=20&c=VzvXrzC-T8knSHzEVuYDm-qEowIi0XCJwlItcL_dW0Y="

    },
    {
      "productoID":3,
      "Modelo":"Trueno",
      "Descripcion":"2 puertas",
      "Precio":20000,
      "Year":"septiembre 11 2002",
      "Marca":"Toyota",
      "Color":"Blanco",
      "ImagenURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sprinter_Trueno_1600_GT_%28AE86%29.jpg/220px-Sprinter_Trueno_1600_GT_%28AE86%29.jpg"

    }
  ]

}
