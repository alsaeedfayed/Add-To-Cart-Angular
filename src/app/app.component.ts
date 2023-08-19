import { Component, HostBinding } from '@angular/core'
import { DarkModeService } from './services/storage/dark-mode.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private darkMode: DarkModeService) {}
  title = 'addToCart'
  currentMode!: boolean

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode()
  }
}
