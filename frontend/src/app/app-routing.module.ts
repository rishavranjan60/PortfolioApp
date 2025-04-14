import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  { path: '', component: MainComponent },
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
