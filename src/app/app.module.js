"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var archive_dates_component_1 = require("./archive-dates/archive-dates.component");
var not_found_component_1 = require("./not-found/not-found.component");
var home_component_1 = require("./home/home.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                archive_dates_component_1.ArchiveDatesComponent,
                not_found_component_1.NotFoundComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'archive/:year/:month', component: archive_dates_component_1.ArchiveDatesComponent },
                    { path: '**', component: not_found_component_1.NotFoundComponent },
                ]),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
