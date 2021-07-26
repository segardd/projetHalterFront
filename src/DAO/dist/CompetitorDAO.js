"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CompetitorDAO = void 0;
var daoAPI_1 = require("./daoAPI");
var Competitor_1 = require("../models/Competitor");
var CompetitorDAO = /** @class */ (function (_super) {
    __extends(CompetitorDAO, _super);
    function CompetitorDAO() {
        return _super.call(this) || this;
    }
    CompetitorDAO.getInstance = function () {
        if (CompetitorDAO.instance == undefined) {
            CompetitorDAO.instance = new CompetitorDAO;
        }
        return CompetitorDAO.instance;
    };
    CompetitorDAO.prototype.findall = function (query) {
        return _super.prototype.findall.call(this, query, Competitor_1.Competitor).then(function (data) { return data.CompetitorMany; });
    };
    return CompetitorDAO;
}(daoAPI_1.daoAPI));
exports.CompetitorDAO = CompetitorDAO;
