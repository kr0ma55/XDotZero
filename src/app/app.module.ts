import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestService } from './test-service.service';
import { Interceptor } from './core/interceptor.service';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomNoticesComponent } from './custom-notices/custom-notices.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverComponentComponent,
    MobileMenuComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    CustomNoticesComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                             
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TestService,{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  } ,
  { provide: 'Window', useFactory: () => window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
