import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription : Subscription;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], 
      name: this.route.snapshot.params['name'], 
    }

  // if you have already initialized the component
  // incoming changes in the parameter will not updated in the body of the page
  // e.g. link with programmatic navigation
  // in this case let's use an observable
  // route.params is an observable. route.snapshot.params is not.
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
  // Angular unsubscribes automatically, 
  // but for your own observables you have to
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  
}
