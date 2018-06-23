module.exports = function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    'ngInject';
  
    $urlMatcherFactoryProvider.strictMode(false);
  
    $urlRouterProvider
      .when('/', '');
  
    $stateProvider
      .state('home', {
        url: '',
        views: {
          'manager@': {
            template: require('./products/list/list.html'),
            controller: 'ListProductsController as product'
          }
        }
      })
  };
  