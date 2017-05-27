//import component module from library its found in
import {Component} from '@angular/core';
import {ProductService} from './products/product.service';

//"@Component" decorator used from import^^
@Component({
    //selector name = custom HTML tag you can insert else where
    selector: 'pm-app',
    //when inserted, template defines what is being inserted as HTML 
    //interpolation: double set of curly braces "{{template expression}}" = one-way data binding from class to template
    //ex: pageTitle is defined in class AppComponent -> used in template
    //interpolation can also do concat, math, function calls
    template: `
    <div>
        <nav class='navbar navbar-fluid'>
            <div class='container-fluid'>
                <a class = 'navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                    </ul>
            </div>
        </nav>
        <div>
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    providers: [ ProductService ]
})
//must export class if we wish to use it elsewhere in the appliaction
export class AppComponent {
    pageTitle: string = 'Acme Product Management'
}
