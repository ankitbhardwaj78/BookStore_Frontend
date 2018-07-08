import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: any[] = [];
  constructor(private messageservice: MessageService,
    private auth: AuthService,
    private route: Router) { }

  ngOnInit() {
    this.auth.isloggedin()
    .subscribe(data => {
      if (!JSON.parse(data["_body"]).done) {
        alert("please login to continue")
        this.route.navigate(['/home']);
      }
    })

    this.messageservice.getMessage()
    .subscribe(data=>{
      this.messages = JSON.parse(data["_body"])
    })
  }

}
