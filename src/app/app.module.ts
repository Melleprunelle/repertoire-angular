import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ContactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


// , MessageService