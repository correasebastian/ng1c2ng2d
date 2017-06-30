(function (window, document) {
  // body
  angular
    .module('demo', [])
    .component('ng1AppComponent', {
      template: '<div>Hi</div>',
      controller: function () {
        console.log('hi from ng1AppComponent')
      }
    })
    .component('ng1FooComponent', {
      template: '<div>Foo component Hi</div>',
    })
    .service('sessionService', function () {
      this.get = function () {
        return {
          username: 'Hans',
          token: '123456789'
        };
      }
    });
})(window, document);
