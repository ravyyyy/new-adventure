import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm!: string;
  data: any[] = ['Brasov', 'Bucuresti', 'Cluj-Napoca', 'Timisoara', 'Iasi', 'Buzau']
  searchResults!: any[];

  search(term: string)
  {
    this.searchResults = this.data.filter(item => {
      console.log(this.searchResults)
      return item.toLowerCase().includes(term.toLowerCase());
    });
  }

  select(item: string): void {
    this.searchTerm = item;
    this.searchResults = [];
  }
}
