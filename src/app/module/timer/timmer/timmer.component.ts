import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../shared/utils/services/timer/timer.service';

@Component({
  selector: 'elix-timmer',
  templateUrl: './timmer.component.html',
  styleUrls: ['./timmer.component.scss'],
})
export class TimmerComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  countDownDate: Date | any = new Date();
  clearTimer: boolean = false;
  public timer: any;
  pause: boolean = true;
  flag: boolean = true;
  style: string;
  descriptionParent: string | any;
  anotherTimer: any;
  private distance: number = 1;

  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      const date = new Date();
      if (this.clearTimer) {
        this.updateDate(date, this.pause);
      }
    }, 1000);
  }

  pauseTimeout() {
    window.clearInterval(this.timer);
  }

  updateTime(moment: string, pass: number, method: boolean) {
    if (moment === 'hour' && method) {
      this.hour += pass;
    }
    if (moment === 'minute' && method) {
      this.minute += pass;
    }
    if (moment === 'second' && method) {
      this.second += pass;
    }
    if (moment === 'hour' && !method) {
      if (this.hour > 0) this.hour -= pass;
      if (this.hour < 0) this.hour = 0;
    }
    if (moment === 'minute' && !method) {
      if (this.minute > 0) this.minute -= pass;
      if (this.minute < 0) this.minute = 0;
    }
    if (moment === 'second' && !method) {
      if (this.second > 0) this.second -= pass;
      if (this.second < 0) this.second = 0;
    }
  }

  startCounter(method: string) {
    if (method === 'start') {
      this.pause = true;
      this.clearTimer = true;
      this.countDownDate = new Date(
        new Date().setHours(
          new Date().getHours() + this.hour,
          new Date().getMinutes() + this.minute,
          new Date().getSeconds() + this.second
        )
      );
      this.flag = false;
    }
    if (method == 'reset') {
      this.pause = true;
      this.clearTimer = true;
      this.countDownDate = new Date(
        new Date().setHours(
          new Date().getHours(),
          new Date().getMinutes(),
          new Date().getSeconds()
        )
      );
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.clearTimer = false;
      this.descriptionParent = '';
      this.flag = true;
    }
    if (method === 'learn') {
      this.clearTimer = true;
      this.countDownDate = new Date(
        new Date().setHours(
          new Date().getHours(),
          new Date().getMinutes() + 25,
          new Date().getSeconds()
        )
      );
      this.flag = false;
    }
    if (method === 'pause') {
      this.pause = false;
      this.clearTimer = true;
      this.countDownDate = new Date(
        new Date().setHours(
          new Date().getHours() + this.hour,
          new Date().getMinutes() + this.minute,
          new Date().getSeconds() + this.second
        )
      );
      this.flag = true;
    }
  }

  onAudioPlay() {
    let audio = new Audio();
    audio.src = './../../../../assets/sound/warn/Msg Tone 2a.mp3';
    audio.load();
    audio.play().then((resp) => {
      this.anotherTimer = setInterval(() => {}, 1000);
    });
  }

  private updateDate(date: Date, pause: boolean) {
    const now = date.getTime();
    if (pause) {
      this.distance = this.countDownDate - now;
      this.flag = false;
    }
    this.hour = Math.floor(
      (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minute = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    this.second = Math.floor((this.distance % (1000 * 60)) / 1000);

    if (this.distance < 0) {
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.clearTimer = false;
      this.onAudioPlay();
      clearInterval(this.anotherTimer);
      this._timerService.sendCounterData({
        name: this.descriptionParent,
        id: 1,
      });
      this.flag = true;
      this.style = '#adbac7';
      this.descriptionParent = '';
    }

    if (this.distance < 2000) {
      this.style = 'red';
    }
    return this.distance;
  }
}
