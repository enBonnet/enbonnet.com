import Link from "next/link";

interface LinkProps {
  url: string;
  label: string;
}

export default function LinkWrapper({ url, label }: LinkProps) {
  return (
    <>
      <Link href={url}>
        <a className="link">{label}</a>
      </Link>
      <style jsx>{`
        .link {
          font-size: var(--actions-text-size);
          background-color: var(--text-bg);
          color: var(--text-with-bg);
          padding: 8px 10px;
          text-decoration: none;
          transition: all 1s;
        }
        .link:hover {
          background-color: var(--purple-color);
          color: var(--text-bg);
        }
      `}</style>
    </>
  );
}
