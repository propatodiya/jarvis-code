import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodestackComponent } from './codestack/codestack.component';


const routes: Routes = [
  { path: '', component: CodestackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
