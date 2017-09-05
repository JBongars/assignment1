/**
 * Title        :   Main Controller for Client Side Application
 * Author       :   Julien Bongars
 * Date         :   05/09/2017
 * Comments     :   Main Module for Assignment1 (StackUp)
 */

(function () {

    var app = angular.module("myApp").controller("mainCtrl", mainCtrl);

    mainCtrl.$inject = ["$http"];

    function mainCtrl($http) {
        var self = this; // vm

        self.initForm = function () {

        }
    }

})();