import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../../services/app.utility.service';
@Component({
    selector: 'app-utility-component',
    template: `
      <div>{{message}}</div>
      <br/>
      <div>{{message1}}</div>

    `
})
export class UtilityComponent implements OnInit {
    message: string;
    message1: string;
    constructor(private serv: UtilityService) { 
        this.message = '';
    }

    ngOnInit(): void { 
        this.message = this.serv.changeCase('Angular Serv', 'U');
        this.message1 = this.serv.changeCase('Angular Serv', 'L');
    }
}
