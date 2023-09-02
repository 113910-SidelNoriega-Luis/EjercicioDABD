import { Component } from '@angular/core';

@Component({
  selector: 'ej4',
  templateUrl: './ej4.component.html',
  styleUrls: ['./ej4.component.css']
})
export class Ej4Component {

  nombre: string = 'Principito';
  descripcion: string =
    'El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry';
  categoria: string = 'Novela';
  anio_publicacion: number = 1943;
  autor: string = 'Antoine de Saint-Exupéry';

  Aumentar() {
    this.anio_publicacion++;
  }
}
