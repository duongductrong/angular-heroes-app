import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.messages = this.messageService.getMessages();
  }
}
