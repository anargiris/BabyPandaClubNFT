import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="px-4 py-2 text-bg relative flex justify-end gap-2 z-10 font-abel">
      <div className="flex justify-between">
        <ul className="flex gap-4 text-lg py-2 mr-8">
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href="#roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="#faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 pt-2">
        <Link href="/">
          <a>
            <Image src="/icons/twitter.svg" width={25} height={25} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/icons/discord.svg" width={25} height={25} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
