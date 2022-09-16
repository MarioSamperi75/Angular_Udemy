import { Component, OnInit } from '@angular/core';

@Component({

  //selector : '[app-servers]',    // you can select by attribute  => <div app-servers><div>
  //selector : '.app-server's,     // you can select by class      => <div classe="app-server"s><div>
  selector: 'app-servers',         // or as element, most common
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus= "the server is not created";
  serverName= 'default';
  isServerCreated=false;
  servers= ['deployement', 'test', 'production'];


  constructor() { 

    setTimeout (() => { this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer () {
    this.isServerCreated = true;
    this.serverCreationStatus= "the server is created! Name is " +  this.serverName;
    this.servers.push(this.serverName);
  }

/*   onUpdateServerName (event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;  //<...> for the sake of typescript 

  } */

}
