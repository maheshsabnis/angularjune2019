import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.category.model';

@Component({
    selector: 'app-pipe-component',
    template: `
        <h1>Angular Pipes</h1>
        <div>{{name|uppercase}}</div>
        <br/>
        <div>{{name|lowercase}}</div>
        <br/>
        <div>{{name|slice:1:4}}</div>
        <br/> Default to en-US
        <div>{{salary|currency}}</div>
        <br/> With Cuontry Symbol
        <div>{{salary|currency:'INR'}}</div>
        <br/> The Full Date
        <div>{{datej|date:'fullDate'}}</div>
        <br/> The Short Date
        <div>{{datej|date:'short'}}</div>
        <br/> Medium
        <div>{{datej|date:'medium'}}</div>
        <br/> Custom
        <div>{{datej|date:'dd/MM/yyyy'}}</div>
        <br/>
        <div>{{cat|json}}</div>
    `

})
export class PipeComponent implements OnInit {
    name: string;
    datej: Date;
    salary: number;
    cat: Category;
    constructor() {
        this.name = 'Angular Pipe Examples.';
        this.datej = new Date(2019, 5, 14);
        this.salary = 120000;
        this.cat = new Category(101, 'Food');
    }

    ngOnInit(): void { }
}
