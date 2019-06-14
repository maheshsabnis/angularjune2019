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
import { SharedModule } from 'src/lib/sharedmodule/app.share.module';
import { ProductServiceComponent } from './components/productservicecomponent/app.productservice.component';
import { PipeComponent } from './components/pipedcomponent/app.pipe.component';
import { ProductFilterPipe } from './components/pipedcomponent/app.cutompipe';
import { CustomPipeComponent } from './components/pipedcomponent/app.custom.pipe.component';
import { HomeComponent } from './components/routeapp/app.home.component';
import { AboutComponent } from './components/routeapp/app.about.component';
import { ContactComponent } from './components/routeapp/app.contact.component';
import { MainComponent } from './components/routeapp/app.main.component';
import { CustomDirectiveComponent } from './components/customdirectivecomponent/app.customdirective.component';
import { ColorDirective } from './directive/app.color.directive';

@NgModule({
  declarations: [
    AppComponent, SimpleComponent,
    ProductComponent, ProductFormComponent,
    CategoryParentComponent, ProductChildComponent,
    UtilityComponent,
    CategorySenderComponent,
    ProductReceiverComponent,
    ProductServiceComponent,
    PipeComponent,
    ProductFilterPipe,
    CustomPipeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
    CustomDirectiveComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, SharedModule
  ],
  providers: [],
  bootstrap: [CustomDirectiveComponent]
})
export class AppModule { }
