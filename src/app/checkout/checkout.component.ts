import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cartservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  product: any = [];
  grandTotal!: number;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res: any) => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.checkoutForm = this.formBuilder.group({
      fullname: [''],
      mobile: [''],
      Address: [''],
      CityandState: [''],
    });
  }
  checkout() {
    this.http
      .post<any>('http://localhost:3000/checkout', this.checkoutForm.value)
      .subscribe(
        (res: any) => {
          alert('Form filled up successfully');
          this.checkoutForm.reset();
          // this.router.navigate(['/login']);
          console.log();
        },
        (err: any) => {
          alert('Something went wrong');
        }
      );
  }
}
