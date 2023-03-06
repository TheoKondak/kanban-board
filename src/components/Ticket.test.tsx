import { describe, it, expect, test, vi } from 'vitest';

import { MemoryRouter } from 'react-router';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { render, fireEvent } from '@testing-library/react';

import Ticket from './Ticket';

vi.mock('react-router-dom', async () => {
  const actual: Object = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({
      ticketId: 1,
    }),
  };
});

const ticket = {
  id: 1,
  columnId: 0,
  title: 'Poland',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem qui, sint labore explicabo cupiditate tenetur voluptas maiores dolorem nam earum autem aliquid laboriosam nulla fugit commodi quis cum quidem maxime at omnis eius! Perferendis praesentium laboriosam, quaerat consequatur dignissimos similique numquam! Illum ipsa ipsum aliquid alias facilis eum quisquam rerum nisi voluptatem tempora quo, quas perspiciatis consequatur nesciunt fugiat perferendis omnis consectetur ratione nulla eveniet hic libero numquam earum esse! Ratione omnis dolores nisi nihil exercitationem quasi, ipsa corporis esse ipsam atque at quo beatae, laboriosam repudiandae expedita asperiores unde impedit amet? Unde dolore amet ut exercitationem suscipit eligendi est nihil necessitatibus maxime, consectetur soluta assumenda? Id beatae soluta eius officiis? Molestiae mollitia facere possimus magnam, laborum dolorum? Quod maiores est, voluptatibus cum placeat praesentium facere alias sint perferendis quaerat reiciendis reprehenderit, fuga fugiat omnis esse illum libero vitae incidunt aliquam, ab dignissimos ullam molestiae ad! Alias recusandae quia architecto minus quidem, nam blanditiis doloribus voluptates fuga non odio omnis quaerat, sed, ipsa ea voluptatibus eligendi. Voluptas praesentium magni, debitis eaque saepe repudiandae, ad quidem voluptatibus mollitia labore earum animi vel ex consequuntur obcaecati tenetur suscipit iste reprehenderit! Consequatur, omnis debitis. Tempora eaque eveniet voluptate cumque blanditiis officiis et!',
};
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

// This will not test Touch
const backend = HTML5Backend;
const dndProviderOptions = {};

test('renders ticket with correct props', () => {
  const setTickets = vi.fn();
  const triggerTicketModal = vi.fn();

  const { getByText } = render(
    <MemoryRouter>
      <DndProvider backend={backend} options={dndProviderOptions}>
        <Ticket ticketId={ticket.id} title={ticket.title} content={ticket.content} columnId={ticket.columnId} setTickets={setTickets} tickets={[ticket]} triggerTicketModal={triggerTicketModal} settings={settings} />
      </DndProvider>
    </MemoryRouter>
  );

  expect(getByText(ticket.title)).toBeInTheDocument();
  expect(getByText(ticket.content.length >= settings.tickets.ticketPreviewLength ? `${ticket.content.substring(0, settings.tickets.ticketPreviewLength)}...` : `${ticket.content}`)).toBeInTheDocument();
});

describe('Ticket', () => {
  const tickets = [ticket];
  const mockSetTickets = vi.fn();
  const mockTriggerTicketModal = vi.fn();

  it('renders the ticket title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Ticket ticketId={ticket.id} title={ticket.title} content={ticket.content} columnId={ticket.columnId} setTickets={mockSetTickets} tickets={tickets} triggerTicketModal={mockTriggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );

    const titleElement = getByText(ticket.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the ticket content preview', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Ticket ticketId={ticket.id} title={ticket.title} content={ticket.content} columnId={ticket.columnId} setTickets={mockSetTickets} tickets={tickets} triggerTicketModal={mockTriggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );

    const contentPreviewElement = ticket.content.length >= settings.tickets.ticketPreviewLength ? `${ticket.content.substring(0, settings.tickets.ticketPreviewLength)}...` : `${ticket.content}`;
    console.log(contentPreviewElement);
    expect(getByText(contentPreviewElement.toString())).toBeInTheDocument();
  });

  it('renders a link to the ticket details page', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Ticket ticketId={ticket.id} title={ticket.title} content={ticket.content} columnId={ticket.columnId} setTickets={mockSetTickets} tickets={tickets} triggerTicketModal={mockTriggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );

    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/ticket/${ticket.id}`);
  });

  it('calls the triggerTicketModal function when clicked', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <DndProvider backend={backend} options={dndProviderOptions}>
          <Ticket ticketId={ticket.id} title={ticket.title} content={ticket.content} columnId={ticket.columnId} setTickets={mockSetTickets} tickets={tickets} triggerTicketModal={mockTriggerTicketModal} settings={settings} />
        </DndProvider>
      </MemoryRouter>
    );

    fireEvent.click(getByRole('listitem'));
    expect(mockTriggerTicketModal).toHaveBeenCalled();
  });
});
