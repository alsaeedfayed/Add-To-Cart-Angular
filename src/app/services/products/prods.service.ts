import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Products } from 'src/app/models/products'

@Injectable({
  providedIn: 'root',
})
export class ProdsService {
  constructor(private http: HttpClient) {}

  //TODO Get Feature Products by mapping all to 10
  getFeaturedProducts(): Observable<Products> {
    return this.http.get<Products>('https://dummyjson.com/products?limit=4')
  }
}
