angular.module('starter')
        .controller('DonationController', function ($scope, $state) {

            $scope.doMaior = function () {
                $state.go('list');
            };

            $scope.doMenor = function () {
                ionic.Platform.exitApp();
                window.close();
            };
        });