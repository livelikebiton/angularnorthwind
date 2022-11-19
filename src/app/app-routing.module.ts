import { AdminGuard } from './services/admin.guard';
import { AdminComponent } from './components/admin-area/admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { EmployeeListComponent } from './components/employees-area/employee-list/employee-list.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { Page404Component } from './components/share-area/page404/page404.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { RegisterComponent } from './components/auth-area/register/register.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "products", canActivate: [AuthGuard], component: ProductListComponent },
    { path: "products/new", canActivate: [AuthGuard], component: AddProductComponent },
    { path: "products/details/:id", canActivate: [AuthGuard], component: ProductDetailsComponent }, 
    { path: "products/edit/:id", canActivate: [AuthGuard], component: UpdateProductComponent }, 
    { path: "employees", canActivate: [AuthGuard], component: EmployeeListComponent }, 
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "admin", canActivate: [AdminGuard], component: AdminComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
