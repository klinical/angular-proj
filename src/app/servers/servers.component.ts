import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  
  styles: [`
    .fifth {
      color: white;
    }`
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server created";
  serverName = 'Example';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'ProdServer'];
  displayPassword = false;
  displayDetailsLog = [];
  numLogs = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    this.displayDetailsLog.push({date: new Date(), num: this.numLogs+1});
    this.displayPassword = true;
    this.numLogs++;
    console.log(this.numLogs)
  }

  getBGColor() {
    return this.numLogs >= 5 ? 'blue' : 'white';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
