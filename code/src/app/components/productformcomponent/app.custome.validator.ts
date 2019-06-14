import { AbstractControl } from '@angular/forms';
import { ProductLogic } from './../../models/app.product.logic';
export class MyValidator {
    static checkNegative(ctrl: AbstractControl): any {
        let val = parseInt(ctrl.value);
        if (val > 0) {
            return null; // valid
        } else {
            return { invalid: true };
        }
    }

    static checkUnique(ctrl: AbstractControl): any {
        let logic = new ProductLogic();
        let val = parseInt(ctrl.value);

        let resArray = logic.getProducts().filter((v, i) => {
            return v.ProductRowId === val;
        });

        if (resArray.length === 0) {
            return null;
        } else { 
            return { invalid: true };
        }
    }
}