angular.module("groceryCtrlModule", [])

.controller("GroceryCtrl",["$scope", "Calculator",function ($scope, Calculator){
    $scope.grocObject =[];
    $scope.grocObject.title = "Main Page";
    $scope.grocObject.subTitle = "Sub Title";
    $scope.grocObject.Firstname = "Ganesh";
    $scope.grocObject.Lastname = "M";

    $scope.grocObject.bindOutput = 2;

    $scope.timesTwo = function () {
        $scope.grocObject.bindOutput = Calculator.timesTwo($scope.grocObject.bindOutput);
    }
}])

.directive("gmWelcomeMessage", function () {
   return{
       restrict: "E",
       template: "<div>Thanks, Ganesh M</div>"
   }
})

.factory("Calculator", function () {
   var calculations = {};
   calculations.timesTwo = function (a) {
       return a * 2;
   };
   return calculations;
})

.controller("GroceryCtrl2", ["$scope",function ($scope) {
    $scope.secondDisplay = "This is Second Page Controller";
}]);