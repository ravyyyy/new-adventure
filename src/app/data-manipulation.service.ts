import { Injectable } from '@angular/core';
import { CITIES, City } from './models/city';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() { }

  cities: City[] = CITIES;

  getCities() {
    return this.cities;
  }
}
