import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { Project } from "../../projects/models/project.model";

@Component({
  selector: "app-viewer-project",
  templateUrl: "./viewer-project.component.html",
  styleUrls: ["./viewer-project.component.css"]
})
export class ViewerProjectComponent implements OnInit {
  public project: Project = {
    id: -1,
    name: ""
  };

  constructor(activatedRoute: ActivatedRoute) {
    this.project.id = activatedRoute.snapshot.params.id;
    this.project.name = environment.projects[this.project.id].name;
  }

  ngOnInit() {}
}
