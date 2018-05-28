import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
tableHeader1='Nombre';
tableHeader2='Apellido';
tableHeader3='Edad';
tableHeader4='Sexo';
tableData1='Jonathan';
tableData2='Demme';
tableData3='73';
tableData4='Masculino';
  constructor() { }

  ngOnInit() {
  }

}
