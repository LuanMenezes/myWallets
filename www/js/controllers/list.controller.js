angular.module('starter')
        .controller('ListController', function ($scope, Wallets, $ionicLoading) {
            $ionicLoading.show({
                template: 'Loading...'
            });

            // https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR
            // https://api.coinmarketcap.com/v1/ticker/?limit=10

            var wallets = Wallets;
            $scope.listWallets = [];
            $scope.search = "";

            wallets.$loaded().then(function (values) {
                console.log("Wallets",values);
                $scope.listWallets = values;
                $ionicLoading.hide();
            }, function (error) {
                console.error("Error:", error);
            });

        });