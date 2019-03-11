describe('palindrome.js -> palindrome -> test for comparing gainst true', function() {
  var text;
  var result;

  beforeEach(function() {
    text = 'ded';
    result = palindrome();
  });

  it('should return true', function() {
    spyOn(window, 'prompt').and.returnValue(text);
    expect(result).toBe(true);
  });
});