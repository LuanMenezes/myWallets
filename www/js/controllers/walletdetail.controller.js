angular.module('starter')
    .controller('WalletDetailController', function ($stateParams, $scope) {
        $scope.coinDetail = $stateParams.coinDetail;
        $scope.items = [];
    });