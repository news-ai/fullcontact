'use strict';

/**
 * Access the Verification API.
 *
 * @constructor
 * @param {FullContact} api Reference to the FullContact wrapping instance.
 * @api public
 */
function Verification(api) {
  this.api = api;

  this.endpoint = 'https://api.fullcontact.com/' + api.version + '/verification/';
  this.send = api.process.bind(api, this);
}

/**
 * Check if the email works
 *
 * ```js
 * fullcontact.verification.email('foo@bar.bar', fn);
 * ```
 *
 * @returns {Verification}
 * @api public
 */
Verification.prototype.email = function disposable() {
  var args = this.api.args(arguments);

  //
  // Add a custom endpoint.
  //
  args.endpoint = this.endpoint + 'email';

  this.send({ email: args.value }, args);
  return this;
};

module.exports = Verification;
