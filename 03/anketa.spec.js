xdescribe('anketa.js -> anketa -> check for retirement age', function(){
  it('shouldnt be null', function(){
    var text = 'some text';
    spyOn(window, 'prompt').and.returnValue(text);
    var result = getFIO();
    expect(result).not.toBe(undefined);
   });

});