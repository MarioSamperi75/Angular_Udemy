import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

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
    const customInternalObservable = new Observable<number>( observer => {
      this.interval = setInterval( () => {
        console.log("observable: " + count)
        observer.next(count++);
      }, 1000);
    })
    
    this.customInternalObservableSubscription = customInternalObservable.subscribe( (num:number) => {
      console.log("observer: " + num)
    })
   
  }

  ngOnDestroy(): void {
    this.customInternalObservableSubscription.unsubscribe();
    clearInterval(this.interval);
  }
}
