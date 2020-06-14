import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = [];
  isAuthenticated: boolean = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.messages = this.messageService.getMessages();

    if (this.isAuthenticated !== this.authService.getAuthenticate()) {
      this.isAuthenticated = this.authService.getAuthenticate();
    }
  }
}
