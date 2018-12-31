import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'ContactListPage', loadChildren: './contact-list-page/contact-list-page.module#ContactListPagePageModule' },
  { path: 'temp', loadChildren: './temp/temp.module#TempPageModule' },
  { path: 'techProfile/:id', loadChildren: './tech-profile/tech-profile.module#TechProfilePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
