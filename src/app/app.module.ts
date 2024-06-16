import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { ProductCreateComponent } from './Components/Products/product-create/product-create.component';
import { ProductEditComponent } from './Components/Products/product-edit/product-edit.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Authentication/register/register.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './Authentication/auth.service';
import { AggregateService, ColumnChooserService, DetailRowService, ExcelExportService, FilterService, GroupService, PageService, PdfExportService, ReorderService, ResizeService, SearchService, SelectionService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { authInterceptor } from './Authentication/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    RegisterComponent,
    HeaderComponent



   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,
    AuthService,
]
})
export class AppModule { }
