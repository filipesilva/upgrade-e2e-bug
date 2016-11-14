import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  describe('Downgraded component with IO', function() {

    beforeAll(function () {
      browser.rootEl = 'body';
      browser.ng12Hybrid = true;
      browser.get('');
    });

    it('has inputs', function () {
      expect(element.all(by.css('h2')).first().getText()).toEqual('Windstorm details!');
    });

    it('has outputs', function () {
      element.all(by.buttonText('Delete')).first().click();
      expect(element.all(by.css('h2')).first().getText()).toEqual('Ex-Windstorm details!');
    });

    it('supports ng-repeat', function () {
      expect(element.all(by.css('hero-detail')).count()).toBe(3);
    });

  });

});
