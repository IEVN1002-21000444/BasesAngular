import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  doblenumero(x:number):number{
    return x*2;
  }

  alumno={
    nombre:'Juan',
    edad: 25,
    curso: 'Angular',
    Fechainscripcion:new Date (),
    pago: 2220
  }

}

