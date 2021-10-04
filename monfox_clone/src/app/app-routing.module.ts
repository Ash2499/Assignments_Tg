import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "doc", component: DocComponent},
  { path: "blog", component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,DocComponent,BlogComponent]

