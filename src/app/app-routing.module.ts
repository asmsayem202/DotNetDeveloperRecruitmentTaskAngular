import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { ProductCreateComponent } from './Components/Products/product-create/product-create.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ProductEditComponent } from './Components/Products/product-edit/product-edit.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthGuard } from './Authentication/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/ProductList", pathMatch: "full" },

  { path: "ProductList", component: ProductListComponent },
  { path: "ProductCreate/create", component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: "ProductDetails/details/:id", component: ProductDetailsComponent },
  { path: "ProductEdit/edit/:id", component: ProductEditComponent, canActivate: [AuthGuard] },


  { path: "login", component: LoginComponent, },
  { path: "register", component: RegisterComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
