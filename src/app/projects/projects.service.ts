import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];
  projectsAPI = 'https://api-base.herokuapp.com/api/pub/projects';
  public projectsHttp$: Observable<any> = null;

  constructor(private httpClient: HttpClient) {}

  getHttpProjects(): Observable<Project[]> {
    this.projectsHttp$ = this.httpClient.get(this.projectsAPI);
    return this.projectsHttp$;
  }

  addHttpProject(project: Project) {
    const ahora = new Date();
    const id = ahora.getTime();
    project.name = 'mediante http ... ' + project.name;
    project.id = id;

    this.httpClient.post(this.projectsAPI, project).subscribe();
  }

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
