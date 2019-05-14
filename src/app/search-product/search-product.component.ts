import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
    products: Product[] = [];
    searchForm: FormGroup;
    keyword: string;

    constructor(private productService: ProductService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
               ) {
    }

    ngOnInit() {
        this.keyword = this.route.snapshot.paramMap.get('keyword');
        this.productService.searchProduct(this.keyword).subscribe(
            data => {
                this.products = data;
            }
        );
        this.searchForm = this.formBuilder.group({
            keyword: ''
        });
    }
    searchProduct() {
        this.keyword = this.searchForm.value.keyword;
        this.productService.searchProduct(this.keyword).subscribe(
            data => {
                this.products = data;
            }
        );
    }
}
