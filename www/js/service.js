angular.module('starter')
        .service('ListagemService', function ($http, $firebaseArray) {
            var ref = firebase.database().ref('modelos');

            return $firebaseArray.$extend({
                listagem: function (ref) {
                    var total = 0;
                    angular.forEach(this.$list, function (rec) {
                        total += rec.x;
                    });
                    return total;
                }
            });
        });