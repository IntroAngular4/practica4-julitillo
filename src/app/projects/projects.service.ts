import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];

  constructor() {}

  getProjects() {
    this.projects = environment.projects;
    return this.projects;
  }

  addProject(project: Project) {
    project.name = 'mediante servicio ... ' + project.name;
    this.projects = environment.projects;

    let maxId = 0;
    this.projects.map(function(proj) {
      if (proj.id > maxId) {
        maxId = proj.id;
      }
    });
    project.id = ++maxId;

    this.projects.push({ ...project });
    environment.projects = this.projects;
    return this.projects;
  }

  removeProject(project: Project) {
    this.projects = environment.projects;
    this.projects = this.projects.filter(p => p.id !== project.id);
    this.projects.push({ ...project });
    environment.projects = this.projects;
    return this.projects;
  }

  getProject(id: number) {
    return this.projects.find(p => (p.id = id));
  }
}
