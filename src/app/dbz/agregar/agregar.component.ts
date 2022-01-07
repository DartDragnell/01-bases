import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Personaje
} from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //Evento que trae la data como un ngModel
  /*
    cambiarNombre(event:any){
      console.log(event.target.value);
    }
  */


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() nuevoPersonaje: EventEmitter < Personaje > = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.nuevoPersonaje.emit(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }


}
