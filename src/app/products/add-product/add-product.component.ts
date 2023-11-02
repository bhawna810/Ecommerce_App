import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
  addNewProduct(form: {
    value: {
      product_productImg: any;
      product_descriptions: any;
      product_id: any;
      product_category: any;
      product_name: any;
      product_rating: any;
      product_price: any;
    };
  }) {
    console.log(form.value);

    let newProduct = {
      id: form.value.product_id,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      descriptions: form.value.product_descriptions,
      rating: form.value.product_rating,
      price: form.value.product_price,
      isAvailable: 1,
      productImg: form.value.product_productImg,
      reviews: form.value.product_category,
    };

    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe((data) => {
      console.log(data);
    });
  }
}
