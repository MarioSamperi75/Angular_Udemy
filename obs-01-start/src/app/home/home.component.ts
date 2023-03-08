import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  customInternalObservableSubscription: Subscription;
  private interval: any;
  constructor() {}

  ngOnInit() {
    /*       this.firtObsSubs = interval(1000).subscribe((count) => {
      console.log(count);
    }); */
    let count = 0;
    const customInternalObservable = new Observable<number>((observer) => {
      this.interval = setInterval(() => {
        //console.log('interval: ' + count);
        observer.next(count++);
        if (count === 50) {
          observer.complete();
        }
        if (count > 10) {
          observer.error(new Error('Counter is greater than 3!!!'));
        }
      }, 1000);
    });

    this.customInternalObservableSubscription =
      customInternalObservable.pipe(filter((data:number) => {return (data%2 ===0) }),map((data:number) => {return "OBSERVER: " + (data + 1) })).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Complete!!');
        }
      );
  }

  ngOnDestroy(): void {
    this.customInternalObservableSubscription.unsubscribe();
    clearInterval(this.interval);
  }
}
