

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { SalutoComponent } from './saluto/saluto.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    SalutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                             
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
