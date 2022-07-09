import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Driver } from 'src/app/shared/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  public getAllDrivers$: Subject<Driver[]> = new Subject<Driver[]>();

  constructor(
    private readonly _httpClient: HttpClient,
  ) {}

  public getAllDrivers() {
    return this._httpClient.get<Driver[]>(
      `${environment.apiUrl}api/transport/driver`
    );
  }
}
