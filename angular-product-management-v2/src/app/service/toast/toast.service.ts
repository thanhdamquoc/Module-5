import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private notificationService: NotificationsService) { }

  onSuccess(message) {
    this.notificationService.success('Success', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    });
  }

  onError(message) {
    this.notificationService.success('Error', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    });
  }
}
