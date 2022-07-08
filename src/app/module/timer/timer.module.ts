import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimmerComponent } from './timmer/timmer.component';
import { AppHeaderRouting } from './timer.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimmerComponent],
  imports: [
    CommonModule,
    AppHeaderRouting,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class TimerModule {}
