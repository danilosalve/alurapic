import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control.valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(username =>
                this.signUpService.checkUserNameTaken(username)
            ))
            .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
            .pipe(first());
        }
    }
}