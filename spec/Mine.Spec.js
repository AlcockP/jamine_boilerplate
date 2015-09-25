describe('My Test', function() {
  it("allows use in a single spec", function() {
      spyOn($, 'ajax').and.callFake(function(options) {
          options.success('hello');
      });
      getData();
      expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("http://example/functions.php");

      var test = document.getElementsByTagName('body');
      console.log(test);
  });
});