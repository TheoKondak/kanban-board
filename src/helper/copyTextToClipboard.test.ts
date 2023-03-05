import { describe, it, expect, vi } from 'vitest';

import copyTextToClipboard from './copyTextToClipboard';

describe('copyTextToClipboard', () => {
  beforeEach(() => {
    // Mocking navigator.clipboard.writeText() method
    navigator.clipboard = {
      writeText: vi.fn(),
    };
  });

  it('should copy text to clipboard', () => {
    const text = 'test text';
    copyTextToClipboard(text);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });

  it('should log an error message if the provided text is not a string', async () => {
    const invalidText: number = 123;
    const consoleSpy = vi.spyOn(console, 'error');
    await copyTextToClipboard(invalidText);
    expect(consoleSpy).toHaveBeenCalledWith(`copyTextToClipboard was expecting a string but received ${typeof invalidText}`);
  });
});
