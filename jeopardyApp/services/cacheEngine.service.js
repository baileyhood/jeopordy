angular
  .module('jeapordy')
  .service('CacheEngine',function($cacheFactory) {
    return $cacheFactory('jeopardyAPI');
});
