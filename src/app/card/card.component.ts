import { Component, Input } from '@angular/core';
import { Items } from './items';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:string='';
   @Input() list:Items[]=[]
}
