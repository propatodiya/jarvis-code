import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CodestackComponent } from './codestack/codestack.component';

import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    CodestackComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
