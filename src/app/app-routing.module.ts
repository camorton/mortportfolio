import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  {path: 'mainpage', component: MainpageComponent}, 
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
