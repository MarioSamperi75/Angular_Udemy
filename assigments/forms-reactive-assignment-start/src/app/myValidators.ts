import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
    static invalidName (control: FormControl): {[s:string]: boolean} {
        if (control.value === "ErrorTest1") {
            return {'invalidName' : true};
        }
        return null;
    }

     static asyncInvalidName (control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject)=> {
            setTimeout(()=> {
                if (control.value === "ErrorTest2") {
                    resolve({'asyncinvalidName' : true});
                } else {
                    resolve(null);
                }
            }, 1500);
        })
        return promise;
    } 
}