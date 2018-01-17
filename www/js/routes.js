angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('list');

        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListController'
            })

            .state('walletdetail', {
                url: '/walletdetail',
                templateUrl: 'templates/walletdetail.html',
                controller: 'WalletDetailController',
                params: {coinDetail: null}
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            })

            .state('donation', {
                url: '/donation',
                templateUrl: 'templates/donation.html',
                controller: 'DonationController'
            })

            .state('faq', {
                url: '/faq',
                templateUrl: 'templates/faq.html'
            })

            .state('create', {
                url: '/create',
                templateUrl: 'templates/create.html',
                controller: 'CreateController'
            });
    });


