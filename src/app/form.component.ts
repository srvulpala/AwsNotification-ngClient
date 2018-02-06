import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { SendNotificationService } from './sendNotification.service';
import { Notification } from './notification';

@Component({
  selector: 'app-form',
   templateUrl: './form.component.html',
 
})
export class AppFormComponent {
  private status:string;
  constructor(
    private sendNotificationService: SendNotificationService,
  ) {}
  
   sendNotification(f): void {
    this.sendNotificationService.sendNotification(new Notification(f.textMessage,f.phoneNumber,f.accessKey,f.secretKey))
      .then((response) => { 
      	console.log(response); 
      	this.handleSuccess();
      })
    
  }
   
   
   private handleSuccess(): void{
       console.log('Success');
       this.status = "Message sent successfully!!";   
     }
   
   
   
}
