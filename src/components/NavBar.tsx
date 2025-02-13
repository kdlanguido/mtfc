// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link className="text-white hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              href="/certificates"
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" href="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" href="/join-us">
              Join Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
