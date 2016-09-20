'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include header with correct data', function() {
    expect(page.h1El.getText()).toBe('Cake Solutions Ltd');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/cake.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('Cake Logo');
  });

});
