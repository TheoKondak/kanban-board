interface Ticket {
  id: string;
  title: string;
  content: string;
  kanbanData: KanbanColumns;
}

interface Tickets {
  title: string;
  tickets: Ticket[];
}

interface KanbanColumn {
  id: string;
  title: string;
  tickets: Ticket[];
  kanbanData: KanbanColumns;
}

interface KanbanColumns {
  kanbanData: KanbanColumn[];
}
