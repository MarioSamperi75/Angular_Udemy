import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activateSubscription: Subscription;
  constructor(private userService: UserService) {}


  ngOnInit() {
    this.activateSubscription = this.userService.activateEmitter.subscribe(activeStatus => {
      this.userActivated = activeStatus;
    })
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }
}
