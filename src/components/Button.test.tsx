import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  const onClick = vi.fn();

  it('renders the button text', () => {
    const buttonText = 'Click me';
    render(<Button text={buttonText} onClick={onClick} dataTestId="test-button" />);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveTextContent(buttonText);
  });

  it('calls onClick when the button is clicked', () => {
    render(<Button text="Click me" onClick={onClick} dataTestId="test-button" />);
    const button = screen.getByTestId('test-button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with the correct data-testid', () => {
    const dataTestId = 'test-button';
    render(<Button text="Click me" onClick={onClick} dataTestId={dataTestId} />);
    const button = screen.getByTestId(dataTestId);
    expect(button).toBeInTheDocument();
  });
});
