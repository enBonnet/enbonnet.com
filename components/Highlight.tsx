interface HighlightProps {
  title: string;
}

export default function Highlight({ title }: HighlightProps) {
  return (
    <div className="highlight">
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .highlight {
          background-color: var(--text-bg);
          padding: 8px 16px;
          width: fit-content;
        }
        .title {
          font-size: 2.7em;
          margin: 0;
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
