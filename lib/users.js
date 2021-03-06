var debug     = require('debug')('skytap-users')
  , Q         = require('q')  
  , arghelper = require('./arghelper')
  , rest      = require('./rest')
  , vargs     = require('vargs-callback');


/** 
 * Users API helper:
 * http://help.skytap.com/#API_Documentation.html#User2
 *
 * @param {Skytap} reference to parent object
 */
function Users(skytap) {  
  this.getArgs = function getArgs() {
    return skytap.getArgs();
  };
}


/**
 * Export the module
 */
module.exports = Users;



/**
 * Gets the list of users
 * 
 * @callback {Function} next
 * @return {Promise}
 */
Users.prototype.list = vargs(function list(params, next) {
  debug('list');

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/users';
  args.params = params;
  return rest.apiGet(args, next);
});


/**
 * Gets a user and its information
 *  
 * @param {Object} params
 * @config {Number} user_id
 * @callback {Function} next
 * @return {Promise}
 */
Users.prototype.get = function get(params, next) {
  debug('get %j', params);

  var args = this.getArgs();
  args.url = 'https://cloud.skytap.com/users/:user_id';
  args.params = params;
  return rest.apiGet(args, next);
};