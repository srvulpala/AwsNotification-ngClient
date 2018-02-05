import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { SendNotificationService } from './sendNotification.service';
import { Notification } from './notification';

@Component({
  selector: 'app-form',
   templateUrl: './form.component.html',
 
})
export class AppFormComponent {
  constructor(
    private sendNotificationService: SendNotificationService,
  ) {}
  
    sendNotification(f: NgForm): void {
    this.sendNotificationService.sendNotification(new Notification(f.textMessage,f.phoneNumber))
      .then(response => console.log(response)) {        
      };
  }
  
}