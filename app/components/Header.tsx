import Link from "next/link";

export default function Header() {
  return (
    <header className="header-component flex items-center justify-between h-12">
      <Link className="flex items-center" href="/about">
        &nbsp;
        <span>gfkoe</span>
      </Link>
      <div className="flex">
        <a className="flex" href="https://github.com/gfkoe">
          <span>GitHub</span>
        </a>
        &nbsp;
        <a className="flex" href="https://linkedin.com/in/gabriel-koeb">
          <span>LinkedIn</span>
        </a>
        &nbsp;
      </div>
    </header>
  );
}
