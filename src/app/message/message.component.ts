import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: any[] = [];
  constructor(private messageservice: MessageService) { }

  ngOnInit() {
    this.messageservice.getMessage()
    .subscribe(data=>{
      this.messages = JSON.parse(data["_body"])
    })
  }

}
