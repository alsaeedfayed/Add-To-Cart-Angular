import { Component, HostBinding, OnInit } from '@angular/core'
import { DarkModeService } from './services/storage/dark-mode.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private darkMode: DarkModeService, private http: HttpClient) {}
  ngOnInit(): void {}
  title = 'addToCart'
  currentMode!: boolean

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode()
  }
}
