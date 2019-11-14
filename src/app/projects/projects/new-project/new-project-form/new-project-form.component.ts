import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Output() public saveProjectUsingHttp = new EventEmitter<Project>();

  public project: Project = {
    id: -1,
    name: ''
  };

  public formGroup: FormGroup;

  //constructor() { }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // public getError(controlName: string): string {
  //   let error = '';
  //   const control = this.formGroup.get(controlName);
  //   if (control.touched && control.errors != null) {
  //     error = JSON.stringify(control.errors);
  //   }
  //   return error;
  // }

  public fSaveProject() {
    this.project = this.formGroup.value;
    this.saveProject.emit(this.project);
    this.formGroup.reset();
  }
  public fSaveProjectUsingService() {
    this.project = this.formGroup.value;
    this.saveProjectUsingService.emit(this.project);
    this.formGroup.reset();
  }
  public fSaveProjectUsingHttp() {
    this.project = this.formGroup.value;
    this.saveProjectUsingHttp.emit(this.project);
    this.formGroup.reset();
  }
}
