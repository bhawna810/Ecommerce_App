import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductComponent,
    ViewProductByCategoryComponent,
    ViewProductComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, FormsModule, ProductsRoutingModule, SiteLayoutModule],
})
export class ProductsModule {}
