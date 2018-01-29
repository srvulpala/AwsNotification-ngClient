import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppFormComponent } from './form.component';
import { SendNotificationService } from './sendNotification.service';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SendNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
