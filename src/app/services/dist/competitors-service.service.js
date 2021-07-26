"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CompetitorsServiceService = void 0;
var core_1 = require("@angular/core");
var Competitor_1 = require("../../models/Competitor");
var apollo_angular_1 = require("apollo-angular");
var DAOAPIFactory_1 = require("src/DAO/DAOAPIFactory");
var CompetitorsServiceService = /** @class */ (function () {
    function CompetitorsServiceService(apollo) {
        this.apollo = apollo;
    }
    CompetitorsServiceService.prototype.getCompetitorFromAPI = function () {
        return this.apollo.watchQuery({
            query: apollo_angular_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n        CompetitorMany{\n        name\n        firstname\n        birthday\n        clubInfo{\n          name\n        }\n        }\n      }"], ["{\n        CompetitorMany{\n        name\n        firstname\n        birthday\n        clubInfo{\n          name\n        }\n        }\n      }"])))
        }).valueChanges;
    };
    CompetitorsServiceService.prototype.getCompetitorFromAPIalter = function () {
        return DAOAPIFactory_1.DAOAPIFactory.getInstance().getCompetitorDAO().findall([
            '_id',
            'name',
            'firstname'
        ], Competitor_1.Competitor);
    };
    CompetitorsServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.Injectable()
    ], CompetitorsServiceService);
    return CompetitorsServiceService;
}());
exports.CompetitorsServiceService = CompetitorsServiceService;
var templateObject_1;
