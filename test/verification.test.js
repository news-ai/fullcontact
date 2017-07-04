describe('FullContact.Verification', function () {
  'use strict';

  var FullContact = require('../');
  var chai = require('chai');

  chai.config.includeStack = true;

  //
  // The API key we use for testing.
  //
  var key = process.env.API_KEY;
  if (!key) {
    throw new Error('Please provide your API using the API_KEY env variable.');
  }

  //
  // Some of the requests take a really long time, so set a really long timeout
  //
  this.timeout(20000);

  //
  // Pre-create an API instance
  //
  var api = new FullContact(key);

  describe('#email', function () {
    it('retrieves data by email', function (done) {
      api.verification.email('me@abhiagarwal.com', done);
    });

    it('provides the proper casing');
  });
});
