import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: Product | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;

      this.productsService
        .viewProduct(this.productId)
        .subscribe((productInfo) => {
          this.productDetails = productInfo; // get the existing data of the product
          console.log(this.productDetails);
        });
    });
  }

  updateProduct(form: {
    value: {
      product_productImg: any;
      id: any;
      categoryId: any;
      productName: any;
      description: any;
      product_rating: any;
      product_price: any;
      product_color: any;
      product_category: any;
    };
  }) {
    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      isAvailable: 1,
      productImg: form.value.product_productImg,
      reviews: form.value.product_category,
    };
    console.log(form);
    this.productsService
      .updateProduct(this.productId, updateProduct)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
