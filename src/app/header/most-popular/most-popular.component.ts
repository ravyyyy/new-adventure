import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataManipulationService } from 'src/app/data-manipulation.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit{
  cities!: City[];
  city!: City;

  @Input() selectedCity!: string;

  constructor(private service: DataManipulationService) {}

  ngOnInit()
  {
    this.cities = this.service.getCities();
  }

  @Output() visit = new EventEmitter<string>();

  visiting(city: City)
  {
    this.city = city;
    this.visit.emit(this.city.name);
  }
}
