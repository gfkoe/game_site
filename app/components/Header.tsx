import Link from "next/link";

export default function Header() {
  return (
    <header className="header-component flex items-center justify-between h-12">
      <Link className="flex items-center" href="/about">
        <span>gfkoe</span>
      </Link>
    </header>
  );
}
