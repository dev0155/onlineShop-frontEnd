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
import {ProductList} from '../app/admin/product-list/product-list';
import {StatisticComponent} from '../app/admin/statistic/statistic.component';
import {WishListComponent} from '../app/user/wishList/wishList.component';
import {SearchProductsComponent} from '../app/product/search-product/search-products.component';
import {SingleUpdateComponent} from '../app/admin/update-singleProduct/single-update-component';
import {EditCategoryComponent} from '../app/admin/edit-category/edit-category.component';
import {AddProducerComponent} from '../app/admin/add-producer/add-producer.component';
import {OrdersComponent} from '../app/admin/orders/orders.component';
import {CategoryListComponent} from '../app/admin/category-list/category-list.component';
import {AuthComponent} from '../app/admin/auth/auth.component';
import {ClientOrderComponent} from '../app/product/client-order/client-order.component';
import {ViewedProductsComponent} from '../app/user/viewed-products/viewed-products.component';
import {OrderingComponent} from '../app/user/ordering/ordering.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserInfoComponent, children: [
      {path: 'viewed', component: ViewedProductsComponent},
      {path: 'ordering', component: OrderingComponent},
      {path: 'wishList', component: WishListComponent},
    ]},
  {path: 'logout', component: LogoutComponent},
  {path: 'search-product', component: SearchProductsComponent},
  {path: 'products', component: ProductListComponent, children: [
      {path: 'category', component: ProductGridComponent},
      {path: 'category', component: FilterComponent}
    ]},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'order/:id', component: ClientOrderComponent},
  {path: 'admin-register', component: AuthComponent},
  {path: 'admin-login', component: AuthComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'product-list', component: ProductList},
      {path: 'add-Product', component: AddProductComponent},
      {path: 'update-singleProduct/:id', component: SingleUpdateComponent},
      {path: 'add-producer', component: AddProducerComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'category-list', component: CategoryListComponent},
      {path: 'category-list/new', component: EditCategoryComponent},
      {path: 'category-list/:id', component: EditCategoryComponent},
      {path: 'statistics', component: StatisticComponent}
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
