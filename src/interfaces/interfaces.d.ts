interface Root {
  triggerTicketModal: Function;
  kanbanColumns: KanbanColumn[] | null;
  tickets: Tickets;
  setTickets: Function;
  settings: Object | null;
}

interface Ticket {
  id: number;
  title: string;
  content: string;
  columnId: number;
}

interface Tickets {
  length: number;
  map(arg0: (ticket: any) => any): unknown;
  concat(newTicket: any): any;
  filter(arg0: (ticket: any) => boolean): unknown;
  id: number;
  title: string;
  tickets: Ticket[];
  columnTickets: Tickets;
}

interface TicketTitle {
  clicked: boolean;
  setTickets: Function;
  setClicked: Function;
  tickets: Tickets;
  columnId: number;
}

interface AddTicket {
  columnId: number;
  tickets: Tickets;
  setTickets: Function;
}

interface TicketModal {
  onBackdropClick: Function;
  isTicketModalVisible: Function;
  tickets: Tickets;
  reFetch: Function;
}

interface Column {
  columnId: number;
  title: string;
  tickets: Tickets;
  setTickets: Function;
  triggerTicketModal: Function;
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
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface BaseModalWrapper {
  onBackdropClick: Function;
  isTicketModalVisible: boolean;
  tickets: Tickets;
  reFetch: Function;
  settings: Object | Null;
}

interface Loading {
  type: string;
  color: string;
}

interface Logo {
  src: string;
  alt: string;
  width: string;
  height: string;
}

// Services

interface Update {
  query: string;
  newObject: Object;
}
