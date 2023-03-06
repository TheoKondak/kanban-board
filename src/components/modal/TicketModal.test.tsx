import { describe, it, expect, vi } from 'vitest';

import { MemoryRouter } from 'react-router';

import { render, fireEvent } from '@testing-library/react';
import TicketModal from './TicketModal';

vi.mock('react-router-dom', async () => {
  const actual: Object = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({
      ticketId: 1,
    }),
  };
});

describe('TicketModal', () => {
  const tickets = [
    { id: 1, columnId: 0, title: 'Ticket 1', content: 'Content for ticket 1' },
    { id: 2, columnId: 0, title: 'Ticket 2', content: 'Content for ticket 2' },
  ];
  const onBackdropClick = vi.fn();
  const reFetch = vi.fn();

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={true} tickets={tickets} reFetch={reFetch} />
      </MemoryRouter>
    );
  });

  it('renders the modal with the correct title and content', () => {
    const { getByText } = render(
      <MemoryRouter>
        <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={true} tickets={tickets} reFetch={reFetch} />
      </MemoryRouter>
    );
    expect(getByText('Ticket 1')).toBeInTheDocument();
    expect(getByText('Content for ticket 1')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    const onBackdropClick = vi.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <TicketModal onBackdropClick={onBackdropClick} isTicketModalVisible={true} tickets={tickets} reFetch={reFetch} />{' '}
      </MemoryRouter>
    );
    fireEvent.click(getByTestId('close-modal'));
    expect(onBackdropClick).toHaveBeenCalled();
  });
});
