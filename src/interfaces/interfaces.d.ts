interface Ticket {
  title: string;
  content: string;
}

interface KanbanColumn {
  title: string;
  tickets: Ticket[];
}
