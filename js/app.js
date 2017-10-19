/**
 * Created by Ganesh M on 19/10/2017.
 */
var app = angular.module('groceryApp', ["ngRoute", "groceryCtrlModule"]);

app.config(function ($routeProvider) {
   $routeProvider

       .when("/", {
           templateUrl: "views/display.html",
           controller : "GroceryCtrl"
       })

       .when("/displaySecond", {
           templateUrl: "views/displaySecond.html",
           controller : "GroceryCtrl2"
       })

       .otherwise({
           redirectTo : "/"
       });

});
