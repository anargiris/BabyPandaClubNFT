import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mb-10 py-2  relative z-10 font-abel">
      <div className="flex max-w-6xl mx-auto justify-between">
        <div className="rounded-full cursor-pointer overflow-hidden relative   w-12 h-12">
          <Link href="/">
            <Image src="/logo.png" layout="fill" objectFit="cover" />
          </Link>
        </div>
        <ul className="flex gap-10 text-lg py-2">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
