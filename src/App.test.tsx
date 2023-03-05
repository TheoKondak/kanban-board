import { describe, it, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';

import { MemoryRouter } from 'react-router';

// To mock window.matchMedia
import '@testing-library/jest-dom/extend-expect';

// Services
import kanbanService from './services/kanbanService';

import App from './App';

// mock matchMedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// vi.mock('./services/kanbanServices');

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('displays loading indicator if tickets are not yet fetched', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    await screen.findByTestId('kanban');
    expect(screen.getByTestId('kanban')).toBeInTheDocument();
  });
});
