xdescribe('apples.js -> getNumWord -> test for choosing a right form of word', function() {
  var result;
  var a = ['яблоко', 'яблока', 'яблок'];

  beforeEach(function() {
    result = getNumWord();
  });

  it('shouldnt return undefined', function() {
    for (var i = 0; i < 100; i++) {
      expect(a).not.toBeUndefined();
    }
  });
});

xdescribe('debug.js -> test -> tests for output', function() {
    var apples;

    beforeEach(function() {
       apples = ['Сколько у вас яблок?'];
    });

    it('Should call getNumWord', function(){
       spyOn(window, 'getNumWord').and.returnValue(apples);
       test();
       expect(window.getNumWord).toHaveBeenCalled();
    });
});
