import {Component} from '@angular/core';
import {IProduct} from './product';

@Component({
    //moduleId: module.id,
    templateUrl: 'app/products/product-details.component.html'
})

export class ProductDetailsComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
}