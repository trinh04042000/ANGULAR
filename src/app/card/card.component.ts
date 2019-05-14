import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {Cart} from '../cart';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    constructor(private cartService: CartService) {
    }
    products: any;
    ngOnInit() {
        this.products = this.cartService.products;
    }
    getSubtotal() {
        return this.products.map(product => product.quantity * product.item.price).reduce((prev, next) => prev + next);
    }
    removeFormCart(item) {
        this.cartService.removeFormCart(item);
        this.products = this.cartService.products;
    }
}
