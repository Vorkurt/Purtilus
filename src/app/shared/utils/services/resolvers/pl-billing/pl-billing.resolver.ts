import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlBillingService } from '../../pl-billing/pl-billing.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlBillingResolver implements Resolve<boolean> {
  constructor(
    private _http: HttpClient,
    private _plBillingService: PlBillingService
  ) {}

  resolve(): Observable<any> {
    return this._plBillingService.dataNextCoins();
  }
}
