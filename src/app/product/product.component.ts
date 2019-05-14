import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
      this.productService.getProduct().subscribe(next => (this.productList = next), error => (this.productList = []));
  }
}