import {Component} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-toastr-demo';

  constructor(private notificationService: NotificationsService) {
  }

  onSuccess(message) {
    this.notificationService.success('Success', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    });
  }
}
