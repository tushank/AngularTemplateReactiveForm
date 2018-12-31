import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAccountComponent } from './components/reactive/admin-account/admin-account.component';
import { AdminAccountTemplateComponent } from './components/template-driven/admin-account/admin-account.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminAccountComponent,
    AdminAccountTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
