module.exports = function($mdThemingProvider) {

    'ngInject';
  
    $mdThemingProvider
      .theme('default')
      .primaryPalette('red')
      .accentPalette('amber');
  
    $mdThemingProvider.alwaysWatchTheme(true);
  
  };
  