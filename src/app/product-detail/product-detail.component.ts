import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(
        next => (this.product = next),
        error => {
            console.log(error);
            this.product = null;
        }
    );
  }

}
