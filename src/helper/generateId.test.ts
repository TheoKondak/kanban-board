import { describe, it, expect, vi } from 'vitest';

import generateId from './generateId';

describe('generateId', () => {
  it('should return a string with underscores and a timestamp', () => {
    const data = 'Hello World';
    const id = generateId(data);
    const regex = /^[\w]+_[\d]+$/; // Matches any string with one or more word characters followed by an underscore and then one or more digits
    expect(typeof id).toBe('string');
    expect(regex.test(id)).toBe(true);
  });

  it('should replace spaces with underscores', () => {
    const data = 'This is a test';
    const id = generateId(data);
    expect(id).toContain('_');
    expect(id).not.toContain(' ');
  });

  it('should handle empty string input', () => {
    const data = '';
    const id = generateId(data);
    const regex = /^_[\d]+$/; // Matches any string that starts with an underscore and then one or more digits
    expect(typeof id).toBe('string');
    expect(regex.test(id)).toBe(true);
  });
});
