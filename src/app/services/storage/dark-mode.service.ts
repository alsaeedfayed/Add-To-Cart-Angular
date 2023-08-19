import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor() {}

  //TODO Set Dark Mode
  setDarkMode(mode: boolean): void {
    localStorage.setItem('darkMode', JSON.stringify(mode))
  }

  //TODO Get Dark Mode
  getDarkMode(): boolean {
    let storageValue
    let modeValue: any = localStorage.getItem('darkMode')
    if (JSON.parse(modeValue) != null) {
      storageValue = JSON.parse(localStorage.getItem('darkMode') ?? 'false')
    }
    return storageValue
  }
}
