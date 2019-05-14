import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    products: Product[] = [];
    searchForm: FormGroup;
    keyword: string;
    // productList: Product[] = [];
    constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.productService.getProduct().subscribe(next => (this.products = next), error => (this.products = []));
        this.searchForm = this.formBuilder.group({keyword: ''});
        this.keyword = this.searchForm.value.keyword;
    }
    searchProduct() {
        this.router.navigate(['/search', this.keyword]);

    }
    inputSearch() {
        this.keyword = this.searchForm.value.keyword;
    }
}
