import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { SellerCrudComponent } from './views/seller-crud/seller-crud.component';
import { SellerCreateComponent} from './components/seller/seller-create/seller-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "sellers",
    component: SellerCrudComponent
  },
  {
    path: "sellers/create",
    component: SellerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
