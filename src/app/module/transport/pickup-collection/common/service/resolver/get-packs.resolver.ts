import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SpinnerStateService } from 'src/app/shared/component';
import { Package } from 'src/app/shared/utils/interfaces';
import { PackService } from '../pack.service';

@Injectable({
  providedIn: 'root',
})
export class GetPacksResolver implements Resolve<void> {
  constructor(
    private readonly _packService: PackService,
    private readonly _sppinerService: SpinnerStateService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this._sppinerService.setStateBehaviorSpinner(true);
    this._packService.getAllPacks();
  }
}
