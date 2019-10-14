import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Project } from "../../projects/models/project.model";

@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.css"]
})
export class NewProjectComponent implements OnInit {
  public project: Project = {
    id: -1,
    name: ""
  };
  public projects: Project[];

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }

  public saveProject() {
    let maxId = 0;
    this.projects.map(function(project) {
      if (project.id > maxId) {
        maxId = project.id;
      }
    });
    this.project.id = ++maxId;

    this.projects.push({ ...this.project });
    environment.projects = this.projects;
  }
}
