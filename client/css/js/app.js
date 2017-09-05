/**
 * Client side code.
 */
(function() {
    var app = angular.module("RegApp", []);

    app.controller("RegistrationCtrl", ["$http", RegistrationCtrl]);

    function RegistrationCtrl($http) {
        var self = this; // vm

        self.user = {
            email: "",
            password: "",
            confirmPassword: "",
            gender: ""
        };

        self.displayUser = {
            email: "",
            password: ""
        };

        self.onlyFemale = function() {
            console.log("onlyFemale > ");
            return self.user.gender == "F";
        };

        self.registerUser = function() {
            console.log(self.user.email);
            console.log(self.user.password);
            $http.post("/users", self.user)
                .then(function(result) {
                    console.log(result);
                    self.displayUser.email = result.data.email;
                    self.displayUser.password = result.data.password;
                }).catch(function(e) {
                    console.log(e);
                });
        };
    }

})();