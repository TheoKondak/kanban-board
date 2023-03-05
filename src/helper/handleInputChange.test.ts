import { describe, it, expect, vi } from 'vitest';

import handleInputChange from './handleInputChange';

describe('handleInputChange', () => {
  it('should throw an error if setFn is not a function', () => {
    const mockEvent = {
      target: {
        value: 'test value',
      },
    };
    const setFn = 'not a function';
    expect(() => handleInputChangeSpy(mockEvent, setFn)).toThrowError();
  });
});
