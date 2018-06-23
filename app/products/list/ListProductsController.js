module.exports = function(ProductsService, SkipScoreService, $mdToast, $scope) {

    'ngInject';
  
    var self = this;
    
    var getProducts = function() {
        self.loading = 'get';
        ProductsService.getProducts().then(function(response) {
          self.loading = false;
          self.products = response;
        });
      };

      var getSkipScore = function() {
        SkipScoreService.getSkipScore().then(function(response) {
          self.currentSkipScore = response;
        });
      };

    this.setSelectedProduct = function(product) {
        SkipScoreService.setCurrentCategory(product.category).then(function(response) {
          self.currentSkipScore = response;
        });
        ProductsService.setSelectedProduct(product.id).then(function(response) {
        self.selectedProduct = response;        
        });
    };

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    getProducts();

    getSkipScore();
  
  };
