import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product'
import { Products } from 'src/app/models/products'
import { ProdsService } from 'src/app/services/products/prods.service'
@Component({
  selector: 'app-best-offers',
  templateUrl: './best-offers.component.html',
  styleUrls: ['./best-offers.component.css'],
})
export class BestOffersComponent implements OnInit {
  constructor(private productService: ProdsService) {}

  FeaturedProducts: Product[] = []
  //TODO subscribe to the products
  ngOnInit(): void {
    this.productService
      .getFeaturedProducts()
      .subscribe((prods: Products) => (this.FeaturedProducts = prods.products))
  }
}
