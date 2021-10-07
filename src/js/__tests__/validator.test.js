import Validator from '../validator';

test.each([
  ['mad333n', true],
  ['mad3333n', false],
])('no more 3 digits', (username, expected) => {
  const valid = new Validator();
  expect(valid.validateUsername(username)).toEqual(expected);
});

test.each([
  ['_maden', false],
  ['-maden', false],
  ['1maden', false],
  ['maden_', false],
  ['maden-', false],
  ['maden5', false],
  ['maden', true],
])('invalid symbol at start or end of username', (username, expected) => {
  const valid = new Validator();
  expect(valid.validateUsername(username)).toEqual(expected);
});

test('wrong language', () => {
  const valid = new Validator();
  const username = 'маден';
  expect(valid.validateUsername(username)).toBeFalsy();
});
