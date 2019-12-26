import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// -------------------------------------------------------
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductItemComponent } from './product-item/product-item.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-product',
    pathMatch: 'full'
  },
  {
    path: 'add-product',
    component: ProductFormComponent
  },
  {
    path: 'product-item',
    component: ProductItemComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
