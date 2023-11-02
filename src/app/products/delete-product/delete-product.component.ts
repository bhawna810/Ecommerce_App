import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  productID = 0;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      this.productID = data['id']; //Capture by Id
      this.productService
        .deleteProduct(this.productID)
        .subscribe((deleteData) => {
          alert('Product has been Deleted'); //delete data by selected id
        });
    });
  }
}
