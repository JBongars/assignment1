/**
 * Client side code.
 */
(function() {
    angular.module("RegApp").controller("RegistrationCtrl", RegistrationCtrl);
    
    RegistrationCtrl.$inject = ["$http"];

    function RegistrationCtrl($http) {
        var self = this; // vm

        self.user = {
            email: "",
            password: "",
            confirmPassword: "",
            fullname: "",
            gender: "",
            dateofbirth: "",
            address: "",
            country: "",
            contactnumber: ""
        };

        self.displayUser = {
            email: "",
            password: ""
        };

        self.registerUser = function() {
            console.log(JSON.stringify(self.user));

            $http.post("/register", self.user)
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