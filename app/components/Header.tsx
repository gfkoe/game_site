import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900">
      <Link className="flex items-center" href="#">
        <span>gfkoe</span>
      </Link>
    </header>
  );
}
