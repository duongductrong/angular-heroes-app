import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  getMessages(): any {
    return this.messages;
  }

  addMessage(message): void {
    this.messages.push(message);
  }
}
