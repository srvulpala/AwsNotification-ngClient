import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Notification } from './notification.ts';

@Injectable()
export class SendNotificationService {
  private baseUrl = 'http://localhost:8080/greeting';

  constructor(private http: Http) { }


  public sendNotification(notification): Promise<Todo> {
   // header.append('Access-Control-Allow-Origin', '*');
    return this.http.post('http://localhost:8080/greeting', notification)
    .toPromise().then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}