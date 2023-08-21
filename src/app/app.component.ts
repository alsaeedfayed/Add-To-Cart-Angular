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
  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products/5').subscribe((res: any) => {
      console.log(res)
    })
  }
  title = 'addToCart'
  currentMode!: boolean

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode()
  }
}
