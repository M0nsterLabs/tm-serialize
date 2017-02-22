import {assert} from 'chai';
import serialize from '../src/Serialize';

describe('Serialize', function () {
  it('converts an object to query string', function () {
    assert.equal(serialize({a: 1}), 'a=1');
    assert.equal(serialize({a: 1, b: 2}), 'a=1&b=2');
    assert.equal(serialize({a: 1, b: 2, c: [3, 4, 5]}), 'a=1&b=2&c=3%2C4%2C5');
    assert.equal(serialize({email: "enny+111@templatemonster.me"}), 'email=enny%2B111%40templatemonster.me');
  });
});