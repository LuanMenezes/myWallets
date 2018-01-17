angular.module('starter', ['ionic', 'firebase', 'ngCordova', 'idf.br-filters', 'ion-gallery', 'ionic-datepicker', 'ngSanitize', 'ui.select'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .filter('propsFilter', function () {
        return function (items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function (item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    })

    .factory("Wallets", function ($firebaseArray) {
        var wallets = new Firebase("https://wallets-b3483.firebaseio.com/wallets");
        return $firebaseArray(wallets);
    })

    .factory("Donations", function ($firebaseArray) {
        var donations = new Firebase("https://wallets-b3483.firebaseio.com/donations");
        return $firebaseArray(donations);
    })

    .factory("Contacts", function ($firebaseArray) {
        var contacts = new Firebase("https://wallets-b3483.firebaseio.com/contacts");
        return $firebaseArray(contacts);
    })
