import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienvenidaComponent} from '../app/bienvenida/bienvenida.component';
import {ContactoComponent} from '../app/contacto/contacto.component';
import {AboutComponent} from '../app/about/about.component';
const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
