var moduleName = 'SkipScore.Core';

angular
  .module(moduleName, [])
  .controller('AppController', require('./controllers/AppController'))
  .controller('SkipScoreService', require('./services/SkipScoreService'));

  module.exports = moduleName;
