import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/component/cart-list/cart-list.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { SuccessSubmitComponent } from './views/success-submit/success-submit.component';

const routes: Routes = [
  { path:"", component: ProductsListComponent },
  { path:"products/:id", component: ProductsDetailsComponent },
  { path: "cart", component:CartListComponent },
  { path: "submit", component:SuccessSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
