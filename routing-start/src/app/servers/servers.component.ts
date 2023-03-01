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
    console.log("ONRELOADFUNKAR!!!")
    // navigate using relative path :the default is the root
    // != routingLink. routingLink as the actual path as default
    // to set the actual path please inject ActivatedRoute and use relativeTo
    // this route is not working anymore, you get sever/server that do not exist
    this.router.navigate(["servers"], {relativeTo: this.route});
    }

}
