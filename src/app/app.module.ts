

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { CustomFooterSonComponent } from './components/custom-footer-son/custom-footer-son.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { PaginaContattiComponent } from './components/pagina-contatti/pagina-contatti.component';
import { PaginaFotoEventiComponent } from './components/pagina-foto-eventi/pagina-foto-eventi.component';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';
import { SalutoComponent } from './components/saluto/saluto.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    SalutoComponent,
    CustomFooterSonComponent,
    PaginaContattiComponent,
    PaginaFotoEventiComponent,
    PaginaHomeComponent
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
