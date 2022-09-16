import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';




@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CartListComponent,
    FormsModule
  ]
})
export class CartModule { }
