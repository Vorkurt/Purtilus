import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLoginComponent } from './pop-up-login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../../../config/auth/firebase';
import { HeaderModule } from '../header.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PopUpLoginComponent', () => {
  let component: PopUpLoginComponent;
  let fixture: ComponentFixture<PopUpLoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpLoginComponent],
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        HeaderModule,
        BrowserDynamicTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verify data user', () => {
    expect(component);
  });
});
