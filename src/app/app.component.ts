import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemSelected = 'recipe';

  onNavigate(item: string) {
    this.itemSelected = item;
  }
}
