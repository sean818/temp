//this whole file is imported to main.ts which is what the application launches
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent }  from './app.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {HttpModule} from '@angular/http';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailsComponent} from './products/product-details.component';
import { RouterModule } from '@angular/router';

//imports (external sources): browser module so it can be viewed in a browser
//declarations (internal sources): the typescript files we wish to execute
//bootstrap: file which defines the bootstrap is selected
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      
    ], {useHash: true})
     ],
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailsComponent
     ],
  bootstrap: [ AppComponent ]
})
//export AppModule ---> import AppModule in main.ts
export class AppModule { }
