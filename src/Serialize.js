/**
 * Serialize.
 *
 * ~~~~
 * import serialize from 'tm-serialize'
 * const query = serialize({'dsdsd':'dsdsdsdsd'})
 * ~~~~
 * @constructor Memberships
 */
export default function (obj) {
  return Object.keys(obj).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  }).join('&');
};