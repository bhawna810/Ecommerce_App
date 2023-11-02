import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/products/sidebar/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss'],
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory: Category | any;
  productList: Product | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data.id;

      this.productService
        .searchCategoryProduct(this.searchCategory)
        .subscribe((categoryData) => {
          this.productList = categoryData;
        });
    });
  }
}
