import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondMoodComponent } from './second-mood/second-mood.component';

const routes: Routes = [
  { path: 'second-mood', component: SecondMoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
