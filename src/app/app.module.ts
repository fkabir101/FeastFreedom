import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {BannerComponent} from './banner/banner.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CreatedMenuItemsComponent } from './created-menu-items/created-menu-items.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    routingComponent,
    FileUploadComponent,
    CreatedMenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
