import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CITIES, City } from '../models/city';
import { ReplaySubject, Subject, debounceTime, delay, filter, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit, OnDestroy{
  protected cities: City[] = CITIES;
  cityServerSideControl: FormControl<City | null> = new FormControl<City | null>(null);
  cityServerSideFilteringControl: FormControl<string | null> = new FormControl<string>('');
  searching = false;
  filteredServerSideCities: ReplaySubject<City[]> = new ReplaySubject<City[]>(1);
  protected _onDestroy = new Subject<void>();

  ngOnInit(){
      this.cityServerSideFilteringControl.valueChanges.pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if(!this.cities) {
            return [];
          }

          return this.cities.filter(city => city.name.toLowerCase().indexOf(!!search ? search.toLowerCase() : '') > -1);
        }),
        delay(500),
        takeUntil(this._onDestroy)
      )
      .subscribe(filteredCities => {
        this.searching = false;
        this.filteredServerSideCities.next(filteredCities);
      },
        error => {
          this.searching = false;
        });
  }

  ngOnDestroy(){
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
