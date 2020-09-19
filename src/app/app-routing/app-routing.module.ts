import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProgramGeneratorComponent } from '../program-generator/program-generator.component';
import {ProgramPageComponent} from '../program-page/program-page.component';
import {ReferencePageComponent} from '../reference-page/reference-page.component';

const routes: Routes = [
  { path: 'athlete-information', component: ProgramGeneratorComponent},
  { path: '', component: LandingPageComponent},
  { path: 'training-program', component: ProgramPageComponent},
  { path: 'reference-page/:age/:bodyweight/:trainingStyle/:availability/:squat1RM/:bench1RM/:deadlift1RM', component: ReferencePageComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
