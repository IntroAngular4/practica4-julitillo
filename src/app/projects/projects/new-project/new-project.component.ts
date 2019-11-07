import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../projects/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  // public project: Project = {
  //   id: -1,
  //   name: ''
  // };
  public projects: Project[];

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projects = environment.projects;
  }

  // public saveProject() {
  //   let maxId = 0;
  //   this.projects.map(function(project) {
  //     if (project.id > maxId) {
  //       maxId = project.id;
  //     }
  //   });
  //   this.project.id = ++maxId;

  //   this.projects.push({ ...this.project });
  //   environment.projects = this.projects;
  // }

  public saveProject(project: Project) {
    let maxId = 0;
    this.projects.map(function(proj) {
      if (proj.id > maxId) {
        maxId = proj.id;
      }
    });
    project.id = ++maxId;

    this.projects.push({ ...project });
    environment.projects = this.projects;
  }

  public saveProjectUsingService(project: Project) {
    this.projectsService.addProject(project);
  }

  public saveProjectUsingHttp(project: Project) {
    this.projectsService.addHttpProject(project);
    this.router.navigate(['/projects/']);
  }
}
