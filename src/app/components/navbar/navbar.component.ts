import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Subject } from 'rxjs'
import { Languages } from 'src/app/models/languages'
import { DarkModeService } from 'src/app/services/storage/dark-mode.service'
import { LanguageService } from 'src/app/services/storage/language.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false
  selectedLang!: string

  languages: Languages[] = [
    { country: 'Ar', flagPath: './assets/images/eg.webp' },
    { country: 'En', flagPath: './assets/images/usa.png' },
  ]

  //TODO call the service first to check the value of the dark mode
  constructor(
    private darkModee: DarkModeService,
    private translateService: TranslateService,
    private languageService: LanguageService,
  ) {
    this.darkMode = this.darkModee.getDarkMode()

    //TODO get language from local storage and set it first
    this.languageService.getLanguage()
      ? (this.selectedLang = this.languageService.getLanguage())
      : (this.selectedLang = 'En')
    this.translateService.use(this.selectedLang)
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

  translate(lang: string): void {
    this.languageService.setLanguage(lang)
    this.translateService.use(lang)
  }
}
