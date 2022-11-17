import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userService: UserService, private counterService: CounterService) {}
  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.updateCounter();
  }
  
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

}
