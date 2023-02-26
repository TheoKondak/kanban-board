interface Ticket {
  id: string;
  title: string;
  content: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  tickets: Ticket[];
}
