import Link from "next/link";

export default function Header() {
  return (
    <header className="header-component flex items-center justify-between h-12">
      <div className="flex items-center">
        <Link className="flex items-center" href={"/"}>
          &nbsp;
          <span>Home</span>
        </Link>
      </div>{" "}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link className="flex items-center" href={"/about"}>
          <span>Gameboards</span>
        </Link>
      </div>
      <div className="flex items-center">
        <a className="flex" href="https://github.com/gfkoe">
          <span>Github</span>
        </a>
        &nbsp;
        <a className="flex" href="https://linkedin.com/in/gabriel-koeb">
          <span>Linkedin</span>
        </a>
        &nbsp;
      </div>
    </header>
  );
}
