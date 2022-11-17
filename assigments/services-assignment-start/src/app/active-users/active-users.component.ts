import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userService: UserService, private counterService: CounterService) {}
  
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.updateCounter();
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
}
