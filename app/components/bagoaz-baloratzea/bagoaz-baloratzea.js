/*global angular*/

angular.module("bagoaz")
    .controller("BagoazBaloratzea", ["$rootScope", "$scope", "$location", "$sce", function ($rootScope, $scope, $location, $sce) {
        "use strict";
        console.log("parameters",$rootScope.gaiak[$location.path().split('/')]);
        // console.log("valor con el parametro", $location.path().split('/').pop()) //VAMOS A ELEGIR ESTE!
        // console.log("array con las lecciones", $rootScope.gaiak);
        // $scope.orainGaia = $sce.trustAsHtml( $rootScope.gaiak[$location.path().split('/').pop()-1].gaia);
        // console.log("orain",orainGaia);
    }]);