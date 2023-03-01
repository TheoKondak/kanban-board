interface Root {
  triggerTicketModal: Function;
  kanbanColumns: KanbanColumns;
  tickets: Tickets;
  setTickets: Function;
}

interface Ticket {
  id: number;
  title: string;
  content: string;
  columnId: number;
}

interface Tickets {
  filter(arg0: (ticket: any) => boolean): unknown;
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

interface TicketModal {
  onBackdropClick: Function;
  isTicketModalVisible: Function;
  tickets: Tickets;
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
  map(arg0: (kanbanColumn: KanbanColumn) => JSX.Element): React.ReactNode;
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
