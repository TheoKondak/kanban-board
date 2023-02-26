interface Ticket {
  id: string;
  title: string;
  content: string;
  columnId: string;
}

interface Tickets {
  title: string;
  tickets: Ticket[];
}

interface KanbanColumn {
  id: string;
  title: string;
}

interface KanbanColumns {
  kanbanData: KanbanColumn[];
}

interface Kanban {
  columns: KanbanColumns;
  tickets: Tickets;
}
