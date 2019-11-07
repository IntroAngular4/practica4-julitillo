import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //@Input() public projects: Project[];
  public projects: Project[];
  public projectsHttp: Project[];
  public projectsHttp$: Observable<Project[]> = null;

  constructor(private projectsService: ProjectsService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.projects = environment.projects;
    this.projectsService
      .getHttpProjects()
      .subscribe(list => (this.projectsHttp = list));
  }

  public filterProjects(name) {
    this.projects = environment.projects;

    if (name) this.projects = this.projects.filter(p => p.name.includes(name));
    else this.projects = environment.projects;
  }
}
