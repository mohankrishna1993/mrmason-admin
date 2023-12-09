import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardPannelComponent } from './components/dashboard-pannel/dashboard-pannel.component';
import { ServicePersonPageComponent } from './components/service-person-page/service-person-page.component';
import { ServiceRequestPageComponent } from './components/service-request-page/service-request-page.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddAssetsCategoriesComponent } from './components/add-assets-categories/add-assets-categories.component';
import { ShowAssetsCategoriesComponent } from './components/show-assets-categories/show-assets-categories.component';
import { EditAssetsCategoriesComponent } from './components/edit-assets-categories/edit-assets-categories.component';
import { AddServiceCategoryComponent } from './components/add-service-category/add-service-category.component';
import { ShowServiceCategoryComponent } from './components/show-service-category/show-service-category.component';
import { EditServiceCategoryComponent } from './components/edit-service-category/edit-service-category.component';
import { SearchPersonDetailsComponent } from './components/search-person-details/search-person-details.component';



const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'admin',component: LoginComponent},
  {path: 'search-person-details',component: SearchPersonDetailsComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard-pannel', pathMatch: 'full' },
      { path: 'dashboard-pannel', component: DashboardPannelComponent },
      { path: 'service-person-page', component: ServicePersonPageComponent},
      { path: 'service-request-page', component: ServiceRequestPageComponent},
      { path: 'add-asset-categories',component: AddAssetsCategoriesComponent},
      { path: 'show-asset-categories',component: ShowAssetsCategoriesComponent},
      { path: 'edit-asset-category/:id',component: EditAssetsCategoriesComponent},
      { path: 'add-service-category',component: AddServiceCategoryComponent},
      { path: 'show-service-category',component: ShowServiceCategoryComponent},
      { path: 'edit-service-category/:id',component: EditServiceCategoryComponent}

    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
