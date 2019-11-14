import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { NewProjectFormComponent } from './projects/new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './projects/viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent,
    ProjectsListComponent,
    FilterProjectsFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ProjectsModule {}
