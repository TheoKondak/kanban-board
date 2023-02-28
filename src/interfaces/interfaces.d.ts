interface Ticket {
  id: number;
  title: string;
  content: string;
  columnId: number;
}

interface Tickets {
  id: number;
  title: string;
  tickets: Ticket[];
}

interface TicketTitle {
  clicked: boolean;
  ticket: Ticket;
  setTickets: function;
  setClicked: function;
  tickets: Tickets;
  columnId: number;
}

interface AddTicket {
  columnId: number;
  tickets: Tickets;
  setTickets: function;
}

interface Column {
  columnId: number;
  title: string;
  tickets: Tickets;
  setTickets: function;
}

interface KanbanColumn {
  id: number;
  title: string;
}

interface KanbanColumns {
  kanbanData: KanbanColumn[];
}

interface Kanban {
  columns: KanbanColumns;
  tickets: Tickets;
}

interface Button {
  text: string;
  onClick: function;
}

interface Button {
  text: string;
  onClick: function;
}
