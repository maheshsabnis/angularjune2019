import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    changeCase(str: string, c: string): string {
        if (c === 'U') {
            return str.toUpperCase();
        }
        if (c === 'L') {
            return str.toLowerCase();
        }
    }
}
