describe('palindrome.js -> palindrome -> test for comparing gainst `null`', function() {
  it('shouldnt return null', function() {
    var text = 'some text';
    spyOn(window, 'prompt').and.returnValue(text);
    var result = palindrome();
    expect(result).not.toBe(null);
  });
});