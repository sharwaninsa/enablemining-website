export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((it, i) => (
        <details key={i} open={i === 0}>
          <summary>{it.title}</summary>
          <div className="body">{it.body}</div>
        </details>
      ))}
    </div>
  );
}