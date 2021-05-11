import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { ECommereceProductComponent } from './e-commerece-product/e-commerece-product.component';
import { CounterTimeComponent } from './counter-time/counter-time.component';
import { CounterComponent } from './counter/counter.component';
import { StudentMarkComponent } from './student-mark/student-mark.component';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { SortDirective } from './sort.directive';
import { CounterModule } from './counter/counter.module';
import { CounterTimeModule } from './counter-time/counter-time.module';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ECommereceProductComponent,
    CounterTimeComponent,
    CounterComponent,
    StudentMarkComponent,
    AlertPopupComponent,
    SortDirective,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    CounterTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
