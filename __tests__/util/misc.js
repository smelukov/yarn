/* @flow */

import * as misc from '../../src/util/misc.js';

test('sortAlpha', () => {
  expect(
    ['foo@6.x', 'foo@^6.5.0', 'foo@~6.8.x', 'foo@^6.7.0', 'foo@~6.8.0', 'foo@^6.8.0', 'foo@6.8.0'].sort(misc.sortAlpha),
  ).toEqual(['foo@6.8.0', 'foo@6.x', 'foo@^6.5.0', 'foo@^6.7.0', 'foo@^6.8.0', 'foo@~6.8.0', 'foo@~6.8.x']);

  expect(
    ['foo@1.0.0-alpha7', 'foo@1.0.0-alpha5', 'foo@1.0.0-alpha17', 'foo@1.0.0-alpha9'].sort(misc.sortAlpha),
  ).toEqual(['foo@1.0.0-alpha5', 'foo@1.0.0-alpha7', 'foo@1.0.0-alpha9', 'foo@1.0.0-alpha17']);
});

test('has2xxResponse', () => {
  const response = {responseCode: 200};
  expect(misc.has2xxResponse(response)).toEqual(true);
});
