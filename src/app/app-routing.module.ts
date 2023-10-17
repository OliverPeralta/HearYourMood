import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondMoodComponent } from './second-mood/second-mood.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  { path: 'second-mood', component: SecondMoodComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
