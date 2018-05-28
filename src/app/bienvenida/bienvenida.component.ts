import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
titulo_info="Jonathan Demme";
biografia="Robert Jonathan Demme (/ˈdɛmi/ DEM-ee;[1] February 22, 1944 – April 26, 2017) was an American film director, producer, and screenwriter. He rose to prominence in the 1980s with his comedy films Melvin and Howard (1980), Swing Shift (1984), Something Wild (1986), and Married to the Mob (1988), as well as the critically acclaimed concert film Stop Making Sense (1984), in collaboration with the band Talking Heads. He became best known for directing The Silence of the Lambs (1991), for which he won the Academy Award for Best Director. He later directed Philadelphia (1993) and Rachel Getting Married (2008).";
  constructor() { }

  ngOnInit() {
  }

}
