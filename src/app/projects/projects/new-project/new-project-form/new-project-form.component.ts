import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() public projects: Project[];
  @Output() public saveProject = new EventEmitter<Project>();
  @Output() public saveProjectUsingService = new EventEmitter<Project>();

  public project: Project = {
    id: -1,
    name: ''
  };

  constructor() {}

  ngOnInit() {}
}
