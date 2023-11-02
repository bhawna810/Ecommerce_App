import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss'],
})
export class ViewAllProductComponent implements OnInit {
  productList: Product | any;
  productId: any;
  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }
}
