import {Component} from '@angular/core';

@Component({
    selector:'app-simple-component',
    template:`<h2>The Simple Component</h2>
     <div>{{message}}</div>
     <br/>
     <input type="text" [value]="message"/>
     <br/>
     <input type="button" (click)="display()" value="Click"/>
     <br/>
     <input type="text" [(ngModel)]="fullName"/>
     <br/>
     <input type="text" [(ngModel)]="fullName"/>
     <br/>
     <input type="text" [(ngModel)]="fullName"/>
    `
})
export class SimpleComponent {
    message: string;
    fullName: string;

    constructor() {
        this.message = 'Hello Angular';
        this.fullName = '';
    }

    display(): void {
        this.message = 'The Event is Fired';
    }
}