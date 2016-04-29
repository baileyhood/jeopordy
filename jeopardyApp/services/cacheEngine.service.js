angular
  .module('jeopardyApp')
  .service('CacheEngine',function($cacheFactory) {
    return $cacheFactory('jeopardyAPI');
});
