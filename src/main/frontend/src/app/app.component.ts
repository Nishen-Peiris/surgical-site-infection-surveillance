import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private activeTab: string;

  setActiveTab(activeTab: string) {
    this.activeTab = activeTab;
  }
}
