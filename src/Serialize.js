/**
 * Serialize.
 *
 * ~~~~
 * import serialize from 'tm-serialize'
 * const query = serialize({'test1':'content1', 'test2':'content2'}) // test1=content1&test2=content2
 * ~~~~
 * @module tm-serialize
 */
export default function (obj) {
  return Object.keys(obj).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  }).join('&');
};