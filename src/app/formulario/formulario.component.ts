import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  openAlert:boolean = false;

  public mostrar_en_consola(name:string):void{
    console.log(name);

    this.openAlert = true;
  }
}
