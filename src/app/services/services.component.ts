import { Component } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceList: Service[] = 
  [
    {bigTitle:'TRAVEL', smallTitle:'Article title', description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...'},
    {bigTitle:'TRAVEL ARRANGEMENTS', smallTitle:'Article title', description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...'},
    {bigTitle:'OUR PROFESSIONAL GUIDE', smallTitle:'Article title', description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...'},
    {bigTitle:'ACTIVITIES', smallTitle:'Article title', description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...'}
  ];

  constructor() {}
}
