import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}

  //TODO Set Language
  setLanguage(lang: string): void {
    localStorage.setItem('language', lang)
  }

  //TODO Get Language
  getLanguage(): string {
    let storageValue
    let language: any = localStorage.getItem('language')
    if (language != null) {
      storageValue = language
    }
    return storageValue
  }
}
