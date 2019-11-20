import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultViewComponent } from './part1/default-view/default-view.component';
import { BaseViewComponent } from './others/components/base-view/base-view.component';


const routes: Routes = [
  { path: '', component: DefaultViewComponent },
  { path: 'others', component: BaseViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
