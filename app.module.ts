import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SimpleComponent } from './components/app.simple.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { CategoryParentComponent } from './components/masterdetails/app.categoryparent.component';
import { ProductChildComponent } from './components/masterdetails/app.productchild.component';
import { UtilityComponent } from './components/utilitycomponent/app.utility.component';
import { CategorySenderComponent } from './components/masterdetailscommunication/app.categorysender.component';
import { ProductReceiverComponent } from './components/masterdetailscommunication/app.productreceiver.component';

@NgModule({
  declarations: [
    AppComponent, SimpleComponent,
    ProductComponent, ProductFormComponent,
    CategoryParentComponent, ProductChildComponent,
    UtilityComponent,
    CategorySenderComponent,
    ProductReceiverComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CategorySenderComponent, ProductReceiverComponent]
})
export class AppModule { }
