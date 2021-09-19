"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveDatesComponent = void 0;
var core_1 = require("@angular/core");
var ArchiveDatesComponent = /** @class */ (function () {
    function ArchiveDatesComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ArchiveDatesComponent.prototype.update = function () {
        this.router.navigate(['']);
    };
    ArchiveDatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            {
                _this.month = params.get('month');
                _this.year = params.get('year');
            }
        });
    };
    ArchiveDatesComponent = __decorate([
        (0, core_1.Component)({
            selector: 'archive-dates',
            templateUrl: './archive-dates.component.html',
            styleUrls: ['./archive-dates.component.css'],
        })
    ], ArchiveDatesComponent);
    return ArchiveDatesComponent;
}());
exports.ArchiveDatesComponent = ArchiveDatesComponent;
