import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component {

  public persona = {
    nombre: '',
    edad: ''
  }
  
  public procesar():void {
    console.log(this.persona);
  }


}
