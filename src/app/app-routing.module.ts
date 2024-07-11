import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CartComponent } from './pages/cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'sale',component:SaleComponent},
  {path:'cart',component:CartComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
