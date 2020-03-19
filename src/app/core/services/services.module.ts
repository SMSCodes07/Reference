import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { AuthService } from './auth/auth.service';
import { ContactService } from './contacts/contact.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  providers: [
    AuthService,
    ContactService,
  ]
})
export class ServicesModule { }
