import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostPopularComponent } from './most-popular/most-popular.component';



@NgModule({
  declarations: [
    TopComponent,
    SearchBarComponent,
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    TopComponent,
    SearchBarComponent,
    MostPopularComponent
  ]
})
export class HeaderModule { }
