import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core'
import { Subject } from 'rxjs'
import { DarkModeService } from 'src/app/services/storage/dark-mode.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false

  //TODO call the service first to check the value of the dark mode
  constructor(private darkModee: DarkModeService) {
    this.darkMode = this.darkModee.getDarkMode()
  }

  @HostBinding('class.dark') get mode(): boolean {
    return this.darkModee.getDarkMode()
  }

  ngOnInit(): void {}

  //TODO toggle mode and emit the value to the service
  toggleMode() {
    this.darkMode = !this.darkMode
    this.darkModee.setDarkMode(this.darkMode)
  }
}
