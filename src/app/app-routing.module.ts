import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExpirienceComponent } from './pages/work-expirience/work-expirience.component';

const routes: Routes = [
  {path: 'work-expirience', component: WorkExpirienceComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
