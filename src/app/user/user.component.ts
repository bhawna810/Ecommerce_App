import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { CartService } from '../services/cartservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  productList: Product | any;
  productId: any;
  constructor(
    private productsService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.productList = data;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }
}
