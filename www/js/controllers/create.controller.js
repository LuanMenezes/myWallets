angular.module('starter')
    .controller('CreateController', function ($state, $scope, Wallets, $ionicHistory, $ionicPopup) {
        var wallets = Wallets;
        // var listCoins = Coins;

        $scope.wallet = {};

        $scope.listCoins = [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC"
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH"
            },
            {
                id:"ripple",
                name:	"Ripple",
                symbol:	"XRP"
            },
            {
                id:	"bitcoin-cash",
                name:	"Bitcoin Cash",
                symbol:	"BCH"
            },
            {
                id:"cardano",
                name:"Cardano",
                symbol:"ADA"
            },
            {
                id:"litecoin",
                name:"Litecoin",
                symbol:"LTC"
            },
            {
                id:"nem",
                name:"NEM",
                symbol:"XEM"
            },
            {
                id:"neo",
                name:"NEO",
                symbol:"NEO"
            },
            {
                id:"iota",
                name:"IOTA",
                symbol:"MIOTA"
            },
            {
                id:	"stellar",
                name:	"Stellar",
                symbol:	"XLM"
            },
            {
                id:	"verge",
                name:	"Verge",
                symbol:	"XVG"
            }
        ];

        // listCoins.$loaded().then(function (values) {
        //     $scope.listCoins = values;
        // }, function (error) {
        //     console.error("Error:", error);
        // });

        $scope.register = function () {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });

            wallets.$add($scope.wallet).then(function () {
                $ionicPopup.alert({
                    title: "Good",
                    template: "Created successfully"
                }).then(function () {
                    $scope.wallet = {};
                    $state.go('list');
                });

            }, function (erro) {
                $ionicPopup.alert({
                    title: "Dados Incorretos",
                    template: erro
                });
            });
        };
    });