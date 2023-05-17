import { sum, say, order } from '../src/js/main.js';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


describe('sum', () => {
  it('is a function', () => {
    expect(typeof sum).toBe('function');
  });

  it('returns `example`', () => {
    expect(sum(1,2)).toBe(3);
  });
});


describe('say', () => {
  it('is a function', () => {
    expect(typeof say).toBe('function');
  });

  it('returns `say`', () => {
    expect(say('hello')).toBe('<p>hello</p>');
  });
});

describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('return array', () => {
    expect(Array.isArray(order([1, 2]))).toBe(true);
  });

  it('returns `order`', () => {
    expect(order([3,5,1])).toEqual([1,3,5]);
  });
});
