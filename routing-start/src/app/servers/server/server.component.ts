import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //we have to pass the param as a number (+)
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
     this.route.params
    .subscribe(
      (params: Params) =>
      this.server = this.serversService.getServer(+params['id'])
    ) 
  }

  onEdit() {
      this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: 'preserve'} )
    }




}
