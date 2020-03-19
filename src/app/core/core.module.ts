import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    ComponentsModule,
    ServicesModule
  ]
})
export class CoreModule { }
