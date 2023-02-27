interface Ticket {
  id: number;
  title: string;
  content: string;
  columnId: number;
}

interface Tickets {
  title: string;
  tickets: Ticket[];
}

interface KanbanColumn {
  columnId: number;
  title: string;
  tickets: Tickets;
  setTickets: function;
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
