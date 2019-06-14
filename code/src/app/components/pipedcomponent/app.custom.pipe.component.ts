import { Component, OnInit } from '@angular/core';
import { ProductInfo } from 'src/app/models/app.product.model';
 
@Component({
    selector: 'app-custompipe-component',
    templateUrl: './app.custompipe.view.html'
})
export class CustomPipeComponent implements OnInit {
    products: Array<ProductInfo>;
    value: number;
    constructor() {
        this.value = 0;
        this.products = new Array<ProductInfo>();

        this.products.push(new ProductInfo(1, 'Prd101', 'Laptop', 100000, 'Electronics', 'IBM', '64 GB'));
        this.products.push(new ProductInfo(2, 'Prd102', 'Iron', 1000, 'Electrical', 'Bajaj', 'Power Press'));
        this.products.push(new ProductInfo(3, 'Prd103', 'Desktop', 30000, 'Electronics', 'Lenovo', '4 GB'));
        this.products.push(new ProductInfo(4, 'Prd104', 'Cleaner', 6000, 'Electrical', 'TATA', 'Clean-booster'));
    }

    setValue(): void {
        this.value = 0;
    }

    ngOnInit(): void { }
}
