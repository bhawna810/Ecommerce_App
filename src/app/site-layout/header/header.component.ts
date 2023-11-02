import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private router: Router, private CartService: CartService) {}

  ngOnInit(): void {
    this.CartService.getProduct().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  logout() {
    console.log('text');
    this.router.navigate(['//login']);
  }
  submit() {
    this.router.navigate(['//cart']);
  }
}
