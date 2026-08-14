import { useEffect, useState } from "react";

type Item = { id: number; title: string; completed: boolean };

const API_URL = import.meta.env.VITE_API_URL ?? "";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/items`)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load data");
        return response.json();
      })
      .then((data) => setItems(data.items))
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <main className="page">
      <span className="badge">AI-generated application</span>
      <h1>Expense Tracker</h1>
      <p className="prompt">Build a student expense tracker with a clean dashboard. Users can view expenses with title, category, amount and date, and see total spending.</p>
      {error && <p className="error">{error}</p>}
      <section>
        {items.map((item) => (
          <article key={item.id}>
            <span>{item.completed ? "✓" : "○"}</span>
            <p>{item.title}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
