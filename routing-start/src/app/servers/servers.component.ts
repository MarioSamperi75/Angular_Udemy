import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // navigate using relative path :the default is the root
    // != routingLink. routingLink as the actual path as default
    // to set the actual path please inject ActivatedRoute and use relativeTo
    this.router.navigate([""], {relativeTo: this.route});
    }

}
