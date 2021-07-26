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
exports.Competitor = void 0;
var Person_1 = require("./Person");
var Sex;
(function (Sex) {
    Sex["M"] = "M";
    Sex["F"] = "F";
    Sex["U"] = "";
})(Sex || (Sex = {}));
;
var Competitor = /** @class */ (function (_super) {
    __extends(Competitor, _super);
    function Competitor(id, sex, name, firstname, birthday, weight) {
        if (name === void 0) { name = ""; }
        if (firstname === void 0) { firstname = ""; }
        if (birthday === void 0) { birthday = new Date(); }
        var _this = _super.call(this) || this;
        _this.sex = Sex.U;
        _this.name = '';
        _this.firstname = '';
        _this.birthday = new Date();
        _this.id = id;
        _this.name = name;
        _this.firstname = firstname;
        _this.sex = _this.setSex(sex);
        _this.birthday = birthday;
        _this.weight = weight;
        return _this;
    }
    Competitor.prototype.getId = function () {
        if (this.id != undefined) {
            return this.id;
        }
        return '';
    };
    Competitor.prototype.setId = function (id) {
        if (this.id == undefined) {
            this.id = id;
        }
        else
            throw new Error('id is already defined');
    };
    Competitor.prototype.setSex = function (sex) {
        if (sex == Sex.M) {
            this.sex = Sex.M;
        }
        else if (sex == Sex.F) {
            this.sex = Sex.F;
        }
        else {
            //console.error(`${sex} is not supported`)
            this.sex = Sex.U;
        }
        return this.sex;
    };
    Competitor.prototype.getSex = function () {
        if (this.sex != undefined)
            return this.sex;
        return null;
    };
    Competitor.prototype.setBirthday = function (day, month, year) {
        if (day > 31 || day < 0) {
            throw new Error('Day must be between 0 and 31');
        }
        if (month < 0 || month > 12) {
            throw new Error('Day must be between 0 and 12');
        }
        try {
            this.birthday = new Date(year, month, day);
        }
        catch (e) {
            throw new Error(e);
        }
    };
    Competitor.prototype.getBirthday = function () {
        return this.birthday;
    };
    Competitor.prototype.getBirthdayFormatLitteral = function () {
        return this.birthday.toLocaleString();
    };
    Competitor.prototype.getBirthdayCompactFormat = function () {
        return this.birthday.getDay() + "/" + this.birthday.getMonth() + "/" + this.birthday.getFullYear() + "}";
    };
    Competitor.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Competitor.prototype.getWeight = function () {
        if (this.weight != undefined) {
            return this.weight;
        }
        return 0;
    };
    return Competitor;
}(Person_1.Person));
exports.Competitor = Competitor;
