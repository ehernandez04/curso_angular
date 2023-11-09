import { Component } from '@angular/core';
// import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  // nombre:string = 'Erick Hernández';
  // persona:Persona = {
  //   nombre: 'Erick Hernández',
  //   edad: 31
  // }

  numero: number = 1;

  decrementar():void{
    this.numero --;
  }

  incrementar():void{
    this.numero ++;
  }
}
