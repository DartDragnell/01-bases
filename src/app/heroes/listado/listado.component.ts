import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Thor','Hulk','Capitan America'];
  heroeBorrado: string[] = [];


  borrarHeroe(): void {
    const heroeMuerto = this.heroes.pop();
    //const heroeMuerto = this.heroes.pop() || '';
    if(heroeMuerto != undefined){
      this.heroeBorrado.push(heroeMuerto);
    }
  }



}
