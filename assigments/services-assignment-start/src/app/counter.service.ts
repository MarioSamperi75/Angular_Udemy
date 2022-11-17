import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CounterService {
    counter: number = 0;

    updateCounter () {
        ++this.counter;
        console.log(this.counter);
    }
}