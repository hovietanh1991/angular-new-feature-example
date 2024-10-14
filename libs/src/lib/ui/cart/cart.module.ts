import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CartComponent],
})
export class CartModule {}
