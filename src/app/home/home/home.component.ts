import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Project } from "../../projects/projects/models/project.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public projects: Project[];

  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }
}
