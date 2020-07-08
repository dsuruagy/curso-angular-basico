import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}
