import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    //selector: 'pm-products',
    //module.id allows us to remove the path "app/products" from the Url items and still find the relative path"
    moduleId: module.id,
    //"templateUrl" can instead specify a link to the HTML you wish to insert
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    //"any" data type used when we don't know/care about data type
    products: IProduct[];
    
    //underscore infront of name denotes that it's private apparently...
    //injects instance of ProductService to the private variable
    constructor(private _productService: ProductService){
        
    }
    
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }
    
    toggleImage(): void
    {
        //takes showImages value (false) and returns opposite (true)
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}