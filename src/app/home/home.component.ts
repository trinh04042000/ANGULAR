import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    // searchForm: FormGroup;
    // keyword: string;
    p: number = 1;
    constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.productService.getProduct().subscribe(next => (this.products = next), error => (this.products = []));
    }
}
