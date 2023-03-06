import { describe, it, expect, vi } from 'vitest';

import { render, fireEvent, screen } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';

import { MemoryRouter } from 'react-router';

import AddTicket from './AddTicket';
import TicketTitle from './AddTicket';

describe('Add Ticket', () => {
  it('renders without crashing', () => {
    render(<AddTicket />);
  });
});

describe('Ticket Title', () => {
  it('renders without crashing', () => {
    render(<TicketTitle />);
  });
});

describe('TicketTitle component', () => {
  const setTickets = vi.fn();
  const tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      content: '',
      columnId: 1,
    },
    {
      id: 2,
      title: 'Ticket 2',
      content: '',
      columnId: 1,
    },
  ];
  const columnId = 1;

  test('renders the component', () => {
    const { container } = render(<TicketTitle setTickets={setTickets} tickets={tickets} columnId={columnId} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders the ticket title input field', () => {
    const { getByRole } = render(<TicketTitle setTickets={setTickets} tickets={tickets} columnId={columnId} />);
    expect(screen.getByTestId('TicketTitle')).toBeInTheDocument();
  });

  test('does not call setTickets when the save button is clicked and the title is empty', () => {
    const { getByRole } = render(<TicketTitle setTickets={setTickets} tickets={tickets} columnId={columnId} />);
    const input = screen.getByTestId('TicketTitle');
    const button = screen.getByTestId('TicketTitle');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    expect(setTickets).not.toHaveBeenCalled();
  });
});
