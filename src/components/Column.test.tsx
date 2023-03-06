import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe, it, expect, test, vi } from 'vitest';

import { MemoryRouter } from 'react-router';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Column from './Column';

// This will not test Touch
const backend = HTML5Backend;
const dndProviderOptions = {};

const columnId = 1;
const title = 'Test Column';
const tickets = [
  {
    id: 1,
    title: 'Test Ticket 1',
    content: 'Test content 1',
    columnId: 1,
  },
  {
    id: 2,
    title: 'Test Ticket 2',
    content: 'Test content 2',
    columnId: 1,
  },
];
const setTickets = vi.fn();
const triggerTicketModal = vi.fn();
const settings = {
  kanban: {
    logo: {
      src: '',
      width: '114',
      height: '26',
      alt: 'Kanban Logo',
    },
    footer: {
      copyrightInfo: 'Made With Love by Theo for MobieTrain',
      githubLink: 'https://github.com/madewithlove/technical-assignment-front-end-engineer-TheoKondak',
      githubLinkOpensInNewTab: true,
    },
  },
  tickets: {
    ticketPreviewLength: 160,
  },
};

describe('Column', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the column title', () => {
    render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Column columnId={columnId} title={title} tickets={tickets} setTickets={setTickets} triggerTicketModal={triggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );
    const columnTitle = screen.getByText(title);
    expect(columnTitle).toBeInTheDocument();
  });

  it('renders a message when there are no tickets in the column', () => {
    render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Column columnId={columnId} title={title} tickets={[]} setTickets={setTickets} triggerTicketModal={triggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );

    const message = screen.getByText('No tickets in this column');
    expect(message).toBeInTheDocument();
  });
});
