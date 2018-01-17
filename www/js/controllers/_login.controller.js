angular.module('starter')
    .controller('LoginController', function ($scope, CarroService, $ionicPopup, $state, $rootScope) {
        $scope.login = {};

        $scope.realizarLogin = function () {

            var dadosLogin = {
                params: {
                    email: $scope.login.email,
                    senha: $scope.login.senha
                }
            };

            CarroService.realizarLogin(dadosLogin).then(function (dados) {
                $rootScope.usuario = dados.usuario;
                $state.go('app.listagem');
            }, function (erro) {
                $ionicPopup.alert({
                    title: "Dados Incorretos",
                    template: "Verifique os campos preenchidos"
                });
            });
        };
    });