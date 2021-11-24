import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentgatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePayButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
