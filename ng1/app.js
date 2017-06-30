(function (window, document) {
  // body
  angular
    .module('demo', [])
    .component('ng1AppComponent', {
      template: '<div>Hi</div>',
      controller: function (sessionService) {
        console.log(sessionService.get())
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
