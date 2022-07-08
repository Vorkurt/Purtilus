import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../../shared/utils/services/timer/timer.service';
import { ITimer } from '../../../../shared/utils/interfaces';

@Component({
  selector: 'elix-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notifications: ITimer[];

  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this._timerService.counterData$.subscribe(
      (resp) => (this.notifications = resp)
    );
  }
}
