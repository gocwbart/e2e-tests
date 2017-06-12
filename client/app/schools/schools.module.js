"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var schools_component_1 = require("./schools.component");
var schools_router_1 = require("./schools.router");
var SchoolsModule = (function () {
    function SchoolsModule() {
    }
    return SchoolsModule;
}());
SchoolsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            schools_router_1.routing
        ],
        declarations: [
            schools_component_1.SchoolsComponent
        ],
        bootstrap: [
            schools_component_1.SchoolsComponent
        ]
    })
], SchoolsModule);
exports.SchoolsModule = SchoolsModule;
