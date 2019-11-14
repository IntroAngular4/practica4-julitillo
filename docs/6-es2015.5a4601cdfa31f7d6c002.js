(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Wm2z:function(t,e,c){"use strict";c.r(e);var r=c("ofXK"),s=c("fXoL"),o=c("3Pt+"),n=c("tyNb"),i=c("AytR"),p=c("tk/3");let a=(()=>{class t{constructor(t){this.httpClient=t,this.projectsAPI="https://api-base.herokuapp.com/api/pub/projects",this.projectsHttp$=null}getHttpProjects(){return this.projectsHttp$=this.httpClient.get(this.projectsAPI),this.projectsHttp$}addHttpProject(t){const e=(new Date).getTime();t.name="mediante http ... "+t.name,t.id=e,this.httpClient.post(this.projectsAPI,t).subscribe()}getProjects(){return this.projects=i.a.projects,this.projects}addProject(t){t.name="mediante servicio ... "+t.name,this.projects=i.a.projects;let e=0;return this.projects.map((function(t){t.id>e&&(e=t.id)})),t.id=++e,this.projects.push(Object.assign({},t)),i.a.projects=this.projects,this.projects}removeProject(t){return this.projects=i.a.projects,this.projects=this.projects.filter(e=>e.id!==t.id),this.projects.push(Object.assign({},t)),i.a.projects=this.projects,this.projects}getProject(t){return this.projects.find(e=>e.id=t)}}return t.ngFactoryDef=function(e){return new(e||t)(s.kc(p.b))},t.ngInjectableDef=s.Yb({token:t,factory:function(e){return t.ngFactoryDef(e)},providedIn:"root"}),t})(),j=(()=>{class t{constructor(t){this.formBuilder=t,this.saveProject=new s.s,this.saveProjectUsingService=new s.s,this.saveProjectUsingHttp=new s.s,this.project={id:-1,name:""}}ngOnInit(){this.buildForm()}buildForm(){this.formGroup=this.formBuilder.group({name:["",[o.l.required,o.l.minLength(5)]]})}fSaveProject(){this.project=this.formGroup.value,this.saveProject.emit(this.project),this.formGroup.reset()}fSaveProjectUsingService(){this.project=this.formGroup.value,this.saveProjectUsingService.emit(this.project),this.formGroup.reset()}fSaveProjectUsingHttp(){this.project=this.formGroup.value,this.saveProjectUsingHttp.emit(this.project),this.formGroup.reset()}}return t.ngFactoryDef=function(e){return new(e||t)(s.cc(o.b))},t.ngComponentDef=s.Wb({type:t,selectors:[["app-new-project-form"]],inputs:{projects:"projects"},outputs:{saveProject:"saveProject",saveProjectUsingService:"saveProjectUsingService",saveProjectUsingHttp:"saveProjectUsingHttp"},decls:14,vars:4,consts:[[3,"formGroup"],["for","name"],["type","text","name","name","formControlName","name","placeholder","Project name"],["name","Save","type","submit",3,"click"],["value","save using servicesave using service","type","button",3,"click"],["value","save using servicesave using Http","type","button",3,"click"]],template:function(t,e){1&t&&(s.gc(0,"h1"),s.Cc(1,"New Project"),s.ec(),s.gc(2,"form"),s.gc(3,"form",0),s.gc(4,"fieldset"),s.gc(5,"label",1),s.Cc(6,"Name "),s.ec(),s.dc(7,"input",2),s.ec(),s.gc(8,"input",3),s.mc("click",(function(t){return e.fSaveProject()})),s.ec(),s.gc(9,"input",4),s.mc("click",(function(t){return e.fSaveProjectUsingService()})),s.ec(),s.gc(10,"input",5),s.mc("click",(function(t){return e.fSaveProjectUsingHttp()})),s.ec(),s.ec(),s.gc(11,"pre"),s.Cc(12),s.pc(13,"json"),s.ec(),s.ec()),2&t&&(s.Pb(3),s.tc("formGroup",e.formGroup),s.Pb(9),s.Dc(s.qc(13,2,e.projects)))},directives:[o.m,o.h,o.i,o.d,o.a,o.g,o.c],pipes:[r.f],styles:[""]}),t})(),u=(()=>{class t{constructor(t,e){this.projectsService=t,this.router=e}ngOnInit(){this.projects=i.a.projects}saveProject(t){let e=0;this.projects.map((function(t){t.id>e&&(e=t.id)})),t.id=++e,this.projects.push(Object.assign({},t)),i.a.projects=this.projects}saveProjectUsingService(t){this.projectsService.addProject(t)}saveProjectUsingHttp(t){this.projectsService.addHttpProject(t),this.router.navigate(["/projects/"])}}return t.ngFactoryDef=function(e){return new(e||t)(s.cc(a),s.cc(n.b))},t.ngComponentDef=s.Wb({type:t,selectors:[["app-new-project"]],decls:1,vars:1,consts:[[3,"projects","saveProject","saveProjectUsingService","saveProjectUsingHttp"]],template:function(t,e){1&t&&(s.gc(0,"app-new-project-form",0),s.mc("saveProject",(function(t){return e.saveProject(t)})),s.mc("saveProjectUsingService",(function(t){return e.saveProjectUsingService(t)})),s.mc("saveProjectUsingHttp",(function(t){return e.saveProjectUsingHttp(t)})),s.ec()),2&t&&s.tc("projects",e.projects)},directives:[j],styles:[""]}),t})(),l=(()=>{class t{constructor(){this.name="",this.filterProjects=new s.s}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=s.Wb({type:t,selectors:[["app-filter-projects-form"]],outputs:{filterProjects:"filterProjects"},decls:8,vars:1,consts:[["for","name"],["type","text","name","name","placeholder","Name",3,"ngModel","ngModelChange"],["name","Filter","type","submit",3,"click"]],template:function(t,e){1&t&&(s.gc(0,"h1"),s.Cc(1,"Filter by project name"),s.ec(),s.gc(2,"form"),s.gc(3,"fieldset"),s.gc(4,"label",0),s.Cc(5,"Project name "),s.ec(),s.gc(6,"input",1),s.mc("ngModelChange",(function(t){return e.name=t})),s.ec(),s.ec(),s.gc(7,"input",2),s.mc("click",(function(t){return e.filterProjects.emit(e.name)})),s.ec(),s.ec()),2&t&&(s.Pb(6),s.tc("ngModel",e.name))},directives:[o.m,o.h,o.i,o.a,o.g,o.j],styles:[""]}),t})();function f(t,e){if(1&t&&(s.gc(0,"ul"),s.gc(1,"li"),s.Cc(2),s.ec(),s.ec()),2&t){const t=e.$implicit;s.Pb(2),s.Dc(t.name)}}let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=s.Wb({type:t,selectors:[["app-projects-list"]],inputs:{projects:"projects",projectsHttp:"projectsHttp"},decls:8,vars:4,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.gc(0,"h2"),s.Cc(1," Here you are the current list of projects:\n"),s.ec(),s.Bc(2,f,3,1,"ul",0),s.gc(3,"h2"),s.Cc(4," Here you are the current list of projects from https://api-base.herokuapp.com/api/pub/projects:\n"),s.ec(),s.gc(5,"pre"),s.Cc(6),s.pc(7,"json"),s.ec()),2&t&&(s.Pb(2),s.tc("ngForOf",e.projects),s.Pb(4),s.Dc(s.qc(7,2,e.projectsHttp)))},directives:[r.j],pipes:[r.f],styles:[""]}),t})(),m=(()=>{class t{constructor(t,e){this.projectsService=t,this.projectsHttp$=null,e.params.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.projects=i.a.projects,this.projectsService.getHttpProjects().subscribe(t=>this.projectsHttp=t)}filterProjects(t){this.projects=i.a.projects,this.projects=t?this.projects.filter(e=>e.name.includes(t)):i.a.projects}}return t.ngFactoryDef=function(e){return new(e||t)(s.cc(a),s.cc(n.a))},t.ngComponentDef=s.Wb({type:t,selectors:[["app-projects"]],decls:6,vars:2,consts:[[1,"sticky"],["routerLink","new",1,"button"],[3,"filterProjects"],[3,"projects","projectsHttp"]],template:function(t,e){1&t&&(s.gc(0,"header",0),s.gc(1,"a",1),s.Cc(2," New "),s.ec(),s.ec(),s.dc(3,"router-outlet"),s.gc(4,"app-filter-projects-form",2),s.mc("filterProjects",(function(t){return e.filterProjects(t)})),s.ec(),s.dc(5,"app-projects-list",3)),2&t&&(s.Pb(5),s.tc("projects",e.projects)("projectsHttp",e.projectsHttp))},directives:[n.c,n.e,l,h],styles:[""]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=s.Wb({type:t,selectors:[["app-viewer-project-form"]],inputs:{project:"project"},decls:4,vars:2,template:function(t,e){1&t&&(s.gc(0,"h2"),s.Cc(1),s.ec(),s.gc(2,"h2"),s.Cc(3),s.ec()),2&t&&(s.Pb(1),s.Ec("Id: ",e.project.id,""),s.Pb(2),s.Ec("Name: ",e.project.name,""))},styles:[""]}),t})();const v=[{path:"",component:m},{path:"new",component:u},{path:":id",component:(()=>{class t{constructor(t,e){this.router=e,this.project={id:-1,name:""},i.a.projects[t.snapshot.params.id]?(this.project.id=t.snapshot.params.id,this.project.name=i.a.projects[this.project.id].name):this.router.navigate(["not-found"])}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)(s.cc(n.a),s.cc(n.b))},t.ngComponentDef=s.Wb({type:t,selectors:[["app-viewer-project"]],decls:1,vars:1,consts:[[3,"project"]],template:function(t,e){1&t&&s.dc(0,"app-viewer-project-form",0),2&t&&s.tc("project",e.project)},directives:[g],styles:[""]}),t})()}];let d=(()=>{class t{}return t.ngModuleDef=s.ac({type:t}),t.ngInjectorDef=s.Zb({factory:function(e){return new(e||t)},imports:[[n.d.forChild(v)],n.d]}),t})();n.d.forChild(v),c.d(e,"ProjectsModule",(function(){return P}));let P=(()=>{class t{}return t.ngModuleDef=s.ac({type:t}),t.ngInjectorDef=s.Zb({factory:function(e){return new(e||t)},imports:[[r.c,d,o.e,o.k]]}),t})()}}]);