import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
etiqueta1='Nombre';
etiqueta2='Apellido';
etiqueta3='Edad';
etiqueta4='Correo';

nombre: string;
apellido: string;
edad: number;
correo: string;

  submitText:string="Enviar :D";

  constructor() { }

  ngOnInit() {
  }

}
