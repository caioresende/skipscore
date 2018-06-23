var moduleName = 'SkipScore.Products.List';

angular
  .module(moduleName, [])
  .controller('ListProductsController', require('./ListProductsController'))
  .service('ProductsService', require('./ProductsService'))
  .service('SkipScoreService', require('../../core/services/SkipScoreService'));

  module.exports = moduleName;
