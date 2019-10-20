import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //@Input() public projects: Project[];
  public projects: Project[];

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }

  public filterProjects(name) {
    this.projects = environment.projects;

    if (name) this.projects = this.projects.filter(p => p.name.includes(name));
    else this.projects = environment.projects;
  }
}
