
require('angular');

angular.module('SkipScore', [
  require('angular-aria'),
  require('angular-animate'),
  require('angular-messages'),
  require('angular-material'),
  require('@uirouter/angularjs').default,
  require('./core'),
  require('./products')
])

.config(require('./routes'))
.config(require('./config'));
