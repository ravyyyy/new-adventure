import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'New Adventure';

  constructor(private titleService: Title)
  {}

  onTitleChanged(newTitle: string)
  {
    this.titleService.setTitle(newTitle);
  }
}
