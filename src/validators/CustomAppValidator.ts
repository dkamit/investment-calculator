import {FormControl} from '@angular/forms'

export class CustomAppValidator {
    static isPositiveNumber(c : FormControl) {
        return parseFloat(c.value) > 0 ? null : {
            positiveNumber: {
                valid: false
            }
        }
    }
}