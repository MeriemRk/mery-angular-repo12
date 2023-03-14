import { Component } from '@angular/core';
import { Items } from './card/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   myList:Items[]=[
    {icon:'fa-regular fa-file', titre:'Documentation réglementaire RH'},
    {icon:'fa-regular fa-file', titre:'Documentation opérationnel RH'},
    {icon:'fa-regular fa-file', titre:'Dmprimés/formulaire'},
    {icon:'fa-regular fa-file', titre:'Courriers types'}


   ]
}
