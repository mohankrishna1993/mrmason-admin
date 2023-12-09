import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { DashboardPannelComponent } from './components/dashboard-pannel/dashboard-pannel.component';
import { ServiceRequestPageComponent } from './components/service-request-page/service-request-page.component';
import { ServicePersonPageComponent } from './components/service-person-page/service-person-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { Loader } from '@googlemaps/js-api-loader';
import { EditAssetsPageComponent } from './components/edit-assets-page/edit-assets-page.component';
import { AddAssetsCategoriesComponent } from './components/add-assets-categories/add-assets-categories.component';
import { ShowAssetsCategoriesComponent } from './components/show-assets-categories/show-assets-categories.component';
import { EditAssetsCategoriesComponent } from './components/edit-assets-categories/edit-assets-categories.component';
import { AddServiceCategoryComponent } from './components/add-service-category/add-service-category.component';
import { ShowServiceCategoryComponent } from './components/show-service-category/show-service-category.component';
import { EditServiceCategoryComponent } from './components/edit-service-category/edit-service-category.component';
import { SearchPersonDetailsComponent } from './components/search-person-details/search-person-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    DashboardPannelComponent,
    ServiceRequestPageComponent,
    ServicePersonPageComponent,
    ForgotPasswordComponent,
    EditAssetsPageComponent,
    AddAssetsCategoriesComponent,
    ShowAssetsCategoriesComponent,
    EditAssetsCategoriesComponent,
    AddServiceCategoryComponent,
    ShowServiceCategoryComponent,
    EditServiceCategoryComponent,
    SearchPersonDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxPaginationModule,
    NgxGpAutocompleteModule

  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyBE49eJ-hTzLNA7IKZ2DOnW-4BBHDzDXlA',
        libraries: ['places']
      })
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
