import { useEffect, useState } from "react";

type Item = { id: number; title: string; completed: boolean };

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => { fetch("/api/items").then(r => r.json()).then(d => setItems(d.items)); }, []);
  return (
    <main className="page">
      <span className="badge">AI-generated application</span>
      <h1>Task Manager</h1>
      <p className="prompt">Build a simple task management web application with a React frontend
and FastAPI backend. Users should be able to view tasks and see
whether each task is completed.</p>
      <section>{items.map(item => <article key={item.id}><span>{item.completed ? "✓" : "○"}</span><p>{item.title}</p></article>)}</section>
    </main>
  );
}
