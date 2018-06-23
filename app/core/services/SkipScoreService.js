module.exports = function($q, $http) {
    'njInject';
  
    var self = this;

    self.currentSkipScore = {
        category: 'Burger',
        score: '90%'    
    };
    self.currentCategory = 'Burger';

    this.getSkipScore = function() {
      return $q.when(self.currentSkipScore);
    };

    this.setCurrentCategory = function(category) {
        self.currentSkipScore.category = cateogry;
        return $q.when(self.currentSkipScore);
    };
    
  };
  