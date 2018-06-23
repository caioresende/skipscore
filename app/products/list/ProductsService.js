module.exports = function($q, $http) {
    'njInject';
  
    var self = this;

    self.products = [
      {
        'id': '1',
        'name': 'Cheese Burger',
        'category': 'Burger',
        'ordersCount': 20,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '2',
        'name': 'Bacon Burger',
        'category': 'Burger',
        'ordersCount': 45,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '3',
        'name': 'Ceasar Salad',
        'category': 'Salad',
        'ordersCount': 32,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '4',
        'name': 'Double Burger',
        'category': 'Burger',
        'ordersCount': 67,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '5',
        'name': 'Triple Burger',
        'category': 'Burger',
        'ordersCount': 66,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '6',
        'name': 'Organic Orange Juice',
        'category': 'Organic Beverages',
        'ordersCount': 98,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '7',
        'name': 'Organic Orange Juice',
        'category': 'Organic Beverages',
        'ordersCount': 122,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      },
      {
        'id': '8',
        'name': 'French Fries',
        'category': 'Side Dish',
        'ordersCount': 56,
        'rating': '60%',
        'history': [{
          'day': 'MON',
          'rating': '67%'
        },
        {
          'day': 'TUE',
          'rating': '67'
        },
        {
          'day': 'WED',
          'rating': '87'
        },
        {
          'day': 'THU',
          'rating': '55'
        },
        {
          'day': 'FRI',
          'rating': '98'
        },
        {
          'day': 'SAT',
          'rating': '34'
        }]
      }
    ];

    self.selectedProduct = {};

    this.getProducts = function() {
      return $q.when(self.products);
    };

    this.setSelectedProduct = function(id) {
      for (var i = 0; i < self.products.length; i++) {
        if (self.products[i].id === id) {
          self.selectedProduct = self.products[i];
        }
      }

      return $q.when(self.selectedProduct);
    };
    
  };
  