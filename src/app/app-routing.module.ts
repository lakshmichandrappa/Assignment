import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { CounterTimeComponent } from './counter-time/counter-time.component';
import { CounterComponent } from './counter/counter.component';
import { ECommereceProductComponent } from './e-commerece-product/e-commerece-product.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { StudentMarkComponent } from './student-mark/student-mark.component';

const routes: Routes = [
  {path: '', redirectTo: '/route1', pathMatch: 'full'},
  {path: 'route1', component: FloatingBannerComponent},
  {path: 'route2', component: ECommereceProductComponent},
  {path: 'route3', component: CounterComponent},
  {path: 'route4', component: CounterTimeComponent},
  {path: 'route5', component: StudentMarkComponent},
  {path: 'route6', component: AlertPopupComponent},
  {path: '**', component: FloatingBannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
