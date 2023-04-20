import Image from "next/image";
import Link from "next/link";

const Nav = () => (
  <nav className=" px-6 text-lg shadow-sm">
    <ul className="flex space-x-2">
      <Link href="/" className={`block hover:scale-110 transition-all -m-4`}>
        <Image
          src="/logo/logo_white_large.png"
          alt="Movie App logo"
          width="100"
          height="100"
        />
      </Link>
    </ul>
  </nav>
);
export default Nav;
