import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { SendNotificationService } from './sendNotification.service';

@Component({
  selector: 'app-form',
   templateUrl: './form.component.html',
 
})
export class AppFormComponent {
  constructor(
    private sendNotificationService: SendNotificationService,
  ) {}
  
    sendNotification(f: NgForm): void {
    this.sendNotificationService.sendNotification(f.textMessage,f.phoneNumber)
      .then(response => console.log(response) {        
      });
  }
  
}