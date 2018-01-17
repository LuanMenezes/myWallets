angular.module('starter')
    .controller('ContactController', function ($scope, Contacts, $ionicPopup) {
        var contacts = Contacts;
        $scope.msg = {};
        $scope.sendContact = function () {
            dtMsg = new Date().toLocaleString();

            var msg = {
                name: $scope.msg.name,
                email: $scope.msg.email,
                phone: $scope.msg.phone,
                messeger: $scope.msg.message,
                date: dtMsg.toString(),
                ask: false
            };

            contacts.$add(msg).then(function () {
                $ionicPopup.alert({
                    title: "Message Sent",
                    template: "Your message has been sent successfully...\n"
                }).then(function () {
                    $scope.msg = {};
                });

            });
        };
    });