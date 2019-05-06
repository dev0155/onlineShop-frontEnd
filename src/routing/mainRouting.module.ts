import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../app/user/login/login.component';
import {RegisterComponent} from '../app/user/register/register.component';
import {UserInfoComponent} from '../app/user/user-info/user-info.component';
import {LogoutComponent} from '../app/user/logout/logout.component';
import {SingleProductComponent} from '../app/product/single-product/single-product.component';
import {ProductListComponent} from '../app/product/product-list/product-list.component';
import {ProductGridComponent} from '../app/product/product-grid/product-grid.component';
import {FilterComponent} from '../app/product/filter/filter.component';
import {AdminComponent} from '../app/admin/admin/admin.component';
import {AddProductComponent} from '../app/admin/add-product/add-product.component';
import {UpdateProductComponent} from '../app/admin/update-product/update-product.component';
import {StatisticComponent} from '../app/admin/statistic/statistic.component';
import {SelectedProductsComponent} from '../app/product/selected-products/selected-products.component';
import {SearchProductsComponent} from '../app/product/search-product/search-products.component';
import {ChangeCategoryComponent} from '../app/admin/change-category/change-category.component';
import {ChangeProducerComponent} from '../app/admin/change-producer/change-producer.component';
import {AddCategoryComponent} from '../app/admin/add-category/add-category.component';
import {AddProducerComponent} from '../app/admin/add-producer/add-producer.component';
import {OrdersComponent} from '../app/admin/orders/orders.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'selected-products', component: SelectedProductsComponent},
  {path: 'search-product', component: SearchProductsComponent},
  {path: 'products', component: ProductListComponent, children: [
      {path: 'category', component: ProductGridComponent},
      {path: 'category', component: FilterComponent}
    ]},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'add-Product', component: AddProductComponent},
      {path: 'update-Product', component: UpdateProductComponent},
      {path: 'statistics', component: StatisticComponent},
      {path: 'change-category', component: ChangeCategoryComponent},
      {path: 'change-producer', component: ChangeProducerComponent},
      {path: 'add-category', component: AddCategoryComponent},
      {path: 'add-producer', component: AddProducerComponent},
      {path: 'orders', component: OrdersComponent},
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
