import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SendNotificationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }



  sendNotification(text,phoneno): Promise<Todo> {
    return this.http.get("http://jsonplaceholder.typicode.com/posts/1")
      .toPromise().then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}