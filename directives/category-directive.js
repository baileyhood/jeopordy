angular
  .module('jeapordy')
  .directive('categoryGetter', function () {
    return {
      templateUrl: '../templates/category.html',
      restrict: 'E',
      scope: {
        categoryId: '@',
        categoryCount: '@',
        categoryTitle: '@',
        getFunc: '&'
      },
    };
  });
