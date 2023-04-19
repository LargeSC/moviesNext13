import Link from "next/link";

const Nav = () => (
  <nav className="py-4 px-6 text-lg shadow-md">
    <ul className="flex space-x-3">
      <Link
        href="/"
        className={`block px-3 py-2 rounded-md border-solid border-2 border-primary-200`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`block px-3 py-2 rounded-md border-solid border-2 border-primary-200`}
      >
        About
      </Link>
    </ul>
  </nav>
);
export default Nav;
