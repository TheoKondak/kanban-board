interface Card {
  title: string;
  content: string;
}

interface KanbanColumn {
  title: string;
  cards: Card[];
}
