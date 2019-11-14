(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Wm2z:function(t,e,c){"use strict";c.r(e);var r,o,n,s,i=c("ofXK"),p=c("fXoL"),u=c("3Pt+"),a=c("tyNb"),j=c("AytR"),f=c("tk/3"),h=((s=function(){function t(t){this.httpClient=t,this.projectsAPI="https://api-base.herokuapp.com/api/pub/projects",this.projectsHttp$=null}return t.prototype.getHttpProjects=function(){return this.projectsHttp$=this.httpClient.get(this.projectsAPI),this.projectsHttp$},t.prototype.addHttpProject=function(t){var e=(new Date).getTime();t.name="mediante http ... "+t.name,t.id=e,this.httpClient.post(this.projectsAPI,t).subscribe()},t.prototype.getProjects=function(){return this.projects=j.a.projects,this.projects},t.prototype.addProject=function(t){t.name="mediante servicio ... "+t.name,this.projects=j.a.projects;var e=0;return this.projects.map((function(t){t.id>e&&(e=t.id)})),t.id=++e,this.projects.push(Object.assign({},t)),j.a.projects=this.projects,this.projects},t.prototype.removeProject=function(t){return this.projects=j.a.projects,this.projects=this.projects.filter((function(e){return e.id!==t.id})),this.projects.push(Object.assign({},t)),j.a.projects=this.projects,this.projects},t.prototype.getProject=function(t){return this.projects.find((function(e){return e.id=t}))},t}()).ngFactoryDef=function(t){return new(t||s)(p.kc(f.b))},s.ngInjectableDef=p.Yb({token:s,factory:function(t){return s.ngFactoryDef(t)},providedIn:"root"}),s),m=((n=function(){function t(t){this.formBuilder=t,this.saveProject=new p.s,this.saveProjectUsingService=new p.s,this.saveProjectUsingHttp=new p.s,this.project={id:-1,name:""}}return t.prototype.ngOnInit=function(){this.buildForm()},t.prototype.buildForm=function(){this.formGroup=this.formBuilder.group({name:["",[u.l.required,u.l.minLength(5)]]})},t.prototype.fSaveProject=function(){this.project=this.formGroup.value,this.saveProject.emit(this.project),this.formGroup.reset()},t.prototype.fSaveProjectUsingService=function(){this.project=this.formGroup.value,this.saveProjectUsingService.emit(this.project),this.formGroup.reset()},t.prototype.fSaveProjectUsingHttp=function(){this.project=this.formGroup.value,this.saveProjectUsingHttp.emit(this.project),this.formGroup.reset()},t}()).ngFactoryDef=function(t){return new(t||n)(p.cc(u.b))},n.ngComponentDef=p.Wb({type:n,selectors:[["app-new-project-form"]],inputs:{projects:"projects"},outputs:{saveProject:"saveProject",saveProjectUsingService:"saveProjectUsingService",saveProjectUsingHttp:"saveProjectUsingHttp"},decls:14,vars:4,consts:[[3,"formGroup"],["for","name"],["type","text","name","name","formControlName","name","placeholder","Project name"],["name","Save","type","submit",3,"click"],["value","save using servicesave using service","type","button",3,"click"],["value","save using servicesave using Http","type","button",3,"click"]],template:function(t,e){1&t&&(p.gc(0,"h1"),p.Cc(1,"New Project"),p.ec(),p.gc(2,"form"),p.gc(3,"form",0),p.gc(4,"fieldset"),p.gc(5,"label",1),p.Cc(6,"Name "),p.ec(),p.dc(7,"input",2),p.ec(),p.gc(8,"input",3),p.mc("click",(function(t){return e.fSaveProject()})),p.ec(),p.gc(9,"input",4),p.mc("click",(function(t){return e.fSaveProjectUsingService()})),p.ec(),p.gc(10,"input",5),p.mc("click",(function(t){return e.fSaveProjectUsingHttp()})),p.ec(),p.ec(),p.gc(11,"pre"),p.Cc(12),p.pc(13,"json"),p.ec(),p.ec()),2&t&&(p.Pb(3),p.tc("formGroup",e.formGroup),p.Pb(9),p.Dc(p.qc(13,2,e.projects)))},directives:[u.m,u.h,u.i,u.d,u.a,u.g,u.c],pipes:[i.f],styles:[""]}),n),g=((o=function(){function t(t,e){this.projectsService=t,this.router=e}return t.prototype.ngOnInit=function(){this.projects=j.a.projects},t.prototype.saveProject=function(t){var e=0;this.projects.map((function(t){t.id>e&&(e=t.id)})),t.id=++e,this.projects.push(Object.assign({},t)),j.a.projects=this.projects},t.prototype.saveProjectUsingService=function(t){this.projectsService.addProject(t)},t.prototype.saveProjectUsingHttp=function(t){this.projectsService.addHttpProject(t),this.router.navigate(["/projects/"])},t}()).ngFactoryDef=function(t){return new(t||o)(p.cc(h),p.cc(a.b))},o.ngComponentDef=p.Wb({type:o,selectors:[["app-new-project"]],decls:1,vars:1,consts:[[3,"projects","saveProject","saveProjectUsingService","saveProjectUsingHttp"]],template:function(t,e){1&t&&(p.gc(0,"app-new-project-form",0),p.mc("saveProject",(function(t){return e.saveProject(t)})),p.mc("saveProjectUsingService",(function(t){return e.saveProjectUsingService(t)})),p.mc("saveProjectUsingHttp",(function(t){return e.saveProjectUsingHttp(t)})),p.ec()),2&t&&p.tc("projects",e.projects)},directives:[m],styles:[""]}),o),l=((r=function(){function t(){this.name="",this.filterProjects=new p.s}return t.prototype.ngOnInit=function(){},t}()).ngFactoryDef=function(t){return new(t||r)},r.ngComponentDef=p.Wb({type:r,selectors:[["app-filter-projects-form"]],outputs:{filterProjects:"filterProjects"},decls:8,vars:1,consts:[["for","name"],["type","text","name","name","placeholder","Name",3,"ngModel","ngModelChange"],["name","Filter","type","submit",3,"click"]],template:function(t,e){1&t&&(p.gc(0,"h1"),p.Cc(1,"Filter by project name"),p.ec(),p.gc(2,"form"),p.gc(3,"fieldset"),p.gc(4,"label",0),p.Cc(5,"Project name "),p.ec(),p.gc(6,"input",1),p.mc("ngModelChange",(function(t){return e.name=t})),p.ec(),p.ec(),p.gc(7,"input",2),p.mc("click",(function(t){return e.filterProjects.emit(e.name)})),p.ec(),p.ec()),2&t&&(p.Pb(6),p.tc("ngModel",e.name))},directives:[u.m,u.h,u.i,u.a,u.g,u.j],styles:[""]}),r);function v(t,e){if(1&t&&(p.gc(0,"ul"),p.gc(1,"li"),p.Cc(2),p.ec(),p.ec()),2&t){var c=e.$implicit;p.Pb(2),p.Dc(c.name)}}var d,P,y,b,w,H=((y=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()).ngFactoryDef=function(t){return new(t||y)},y.ngComponentDef=p.Wb({type:y,selectors:[["app-projects-list"]],inputs:{projects:"projects",projectsHttp:"projectsHttp"},decls:8,vars:4,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(p.gc(0,"h2"),p.Cc(1," Here you are the current list of projects:\n"),p.ec(),p.Bc(2,v,3,1,"ul",0),p.gc(3,"h2"),p.Cc(4," Here you are the current list of projects from https://api-base.herokuapp.com/api/pub/projects:\n"),p.ec(),p.gc(5,"pre"),p.Cc(6),p.pc(7,"json"),p.ec()),2&t&&(p.Pb(2),p.tc("ngForOf",e.projects),p.Pb(4),p.Dc(p.qc(7,2,e.projectsHttp)))},directives:[i.j],pipes:[i.f],styles:[""]}),y),C=((P=function(){function t(t,e){var c=this;this.projectsService=t,this.projectsHttp$=null,e.params.subscribe((function(t){c.ngOnInit()}))}return t.prototype.ngOnInit=function(){var t=this;this.projects=j.a.projects,this.projectsService.getHttpProjects().subscribe((function(e){return t.projectsHttp=e}))},t.prototype.filterProjects=function(t){this.projects=j.a.projects,this.projects=t?this.projects.filter((function(e){return e.name.includes(t)})):j.a.projects},t}()).ngFactoryDef=function(t){return new(t||P)(p.cc(h),p.cc(a.a))},P.ngComponentDef=p.Wb({type:P,selectors:[["app-projects"]],decls:6,vars:2,consts:[[1,"sticky"],["routerLink","new",1,"button"],[3,"filterProjects"],[3,"projects","projectsHttp"]],template:function(t,e){1&t&&(p.gc(0,"header",0),p.gc(1,"a",1),p.Cc(2," New "),p.ec(),p.ec(),p.dc(3,"router-outlet"),p.gc(4,"app-filter-projects-form",2),p.mc("filterProjects",(function(t){return e.filterProjects(t)})),p.ec(),p.dc(5,"app-projects-list",3)),2&t&&(p.Pb(5),p.tc("projects",e.projects)("projectsHttp",e.projectsHttp))},directives:[a.c,a.e,l,H],styles:[""]}),P),D=((d=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()).ngFactoryDef=function(t){return new(t||d)},d.ngComponentDef=p.Wb({type:d,selectors:[["app-viewer-project-form"]],inputs:{project:"project"},decls:4,vars:2,template:function(t,e){1&t&&(p.gc(0,"h2"),p.Cc(1),p.ec(),p.gc(2,"h2"),p.Cc(3),p.ec()),2&t&&(p.Pb(1),p.Ec("Id: ",e.project.id,""),p.Pb(2),p.Ec("Name: ",e.project.name,""))},styles:[""]}),d),S=[{path:"",component:C},{path:"new",component:g},{path:":id",component:(b=function(){function t(t,e){this.router=e,this.project={id:-1,name:""},j.a.projects[t.snapshot.params.id]?(this.project.id=t.snapshot.params.id,this.project.name=j.a.projects[this.project.id].name):this.router.navigate(["not-found"])}return t.prototype.ngOnInit=function(){},t}(),b.ngFactoryDef=function(t){return new(t||b)(p.cc(a.a),p.cc(a.b))},b.ngComponentDef=p.Wb({type:b,selectors:[["app-viewer-project"]],decls:1,vars:1,consts:[[3,"project"]],template:function(t,e){1&t&&p.dc(0,"app-viewer-project-form",0),2&t&&p.tc("project",e.project)},directives:[D],styles:[""]}),b)}],U=((w=function(){}).ngModuleDef=p.ac({type:w}),w.ngInjectorDef=p.Zb({factory:function(t){return new(t||w)},imports:[[a.d.forChild(S)],a.d]}),w);a.d.forChild(S),c.d(e,"ProjectsModule",(function(){return F}));var k,F=((k=function(){}).ngModuleDef=p.ac({type:k}),k.ngInjectorDef=p.Zb({factory:function(t){return new(t||k)},imports:[[i.c,U,u.e,u.k]]}),k)}}]);