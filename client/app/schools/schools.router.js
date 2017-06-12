"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var schools_component_1 = require("./schools.component");
var routes = [
    {
        path: '',
        component: schools_component_1.SchoolsComponent
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
