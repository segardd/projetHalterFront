"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.daoAPI = void 0;
var graphQLAPIManager_1 = require("../datasourceManagement/graphQLAPIManager");
var apollo_angular_1 = require("apollo-angular");
var daoAPI = /** @class */ (function () {
    function daoAPI() {
    }
    daoAPI.prototype.find = function (id, query, type) {
        var objet = new type();
        return objet;
    };
    daoAPI.prototype.create = function (object, query, type) {
        var objet = new type();
        return objet;
    };
    daoAPI.prototype.update = function (object, query, type) {
        var objet = new type();
        return objet;
    };
    daoAPI.prototype["delete"] = function (object) {
    };
    daoAPI.prototype.saveall = function (objects) {
    };
    daoAPI.prototype.findall = function (query, type) {
        var objects = [];
        // Creating Query
        var objet = new type();
        var queryString = "query{\n" + objet.constructor.name + "Many{ \n";
        query.forEach(function (element) {
            console.log("in each");
            if (element instanceof Object) {
                console.log("in instanceof");
                queryString += "{\n";
                element.forEach(function (subElement) {
                    queryString += subElement + "\n";
                });
                queryString += "}\n";
            }
            queryString += element + "\n";
        });
        queryString += "}\n}\n";
        console.log('queryString: \n' + queryString);
        var myQuery = apollo_angular_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), queryString);
        myQuery = apollo_angular_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["query{\n            CompetitorMany{ \n            _id\n            name\n            firstname\n            }\n        }"], ["query{\n            CompetitorMany{ \n            _id\n            name\n            firstname\n            }\n        }"
            // Execute Query
        ])));
        // Execute Query
        var gqlManager = graphQLAPIManager_1.GQLAPIManager.getInstance();
        return new Promise(function (resolve, reject) {
            //var data:any = gqlManager.getData(myQuery)
            //console.log("data: "+data)
            var result = gqlManager.getData(myQuery).then(function (data) {
                console.log("data in daoAPI: " + data);
                resolve(data.data);
            })["catch"](function (error) {
                console.error("error: " + error);
                reject('error: ' + error);
            });
            /*.then(value =>{
            console.log('value: '+value)
            resolve(value.data);
        })
        .catch((error)=>{
        console.error(error)
        reject(new Error(error))
        })*/
        });
        //objects = data;
        //return objects;
    };
    return daoAPI;
}());
exports.daoAPI = daoAPI;
var templateObject_1, templateObject_2;
