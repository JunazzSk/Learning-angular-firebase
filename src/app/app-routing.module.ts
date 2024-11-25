import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/create-product/create-product.component';
import { EditProductsComponent } from './pages/dashboard/edit-products/edit-products.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'contacts',
    component:ContactsComponent,
  },
  {
    path:'dashboard/create-product',
    component:CreateProductComponent
  },
  {
 path:"edit-products/:id",
 component:EditProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
