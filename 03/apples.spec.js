describe('apples.js -> getNumWord -> test for choosing a right form of word', function() {
  var result;

  beforeEach(function() {
    result = getNumWord();
  });

  it('Should be right form', function(){
    spyOn(window, 'prompt').and.callFake(function() {
      return 1;
    });
    test();
    expect(result).toBe('яблоко');
  });
});

describe('debug.js -> test -> tests for output', function() {
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
