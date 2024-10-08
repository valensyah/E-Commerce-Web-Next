"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "flowbite-react";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dec3rd</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-decoration-none text-indigo-950 font-semibold text-lg">Home</Navbar.Link>
        <Navbar.Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">Catalogue</Navbar.Link>
        <Navbar.Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">About Us</Navbar.Link>
        <Navbar.Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
      // <nav className="w-full h-16 py-2 flex items-center justify-between">
      //   <div className="w-fit h-fit flex items-center gap-4">
          // <Link href="/" className="text-decoration-none text-indigo-950 font-semibold text-lg">Home</Link>
          // <Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">Catalogue</Link>
          // <Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">About Us</Link>
          // <Link href="#" className="text-decoration-none text-indigo-950 font-semibold text-lg">Contact</Link>
      //   </div>
      //   <button className="border border-indigo-950 text-indigo-950 rounded-md px-2 py-1">Sign In</button>
      // </nav>
  );
};
