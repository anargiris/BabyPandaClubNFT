import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
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
        <div className="flex gap-2 pt-3">
          <Link href="https://twitter.com/BabyPandaClub">
            <a>
              <Image
                src="/icons/twitter.svg"
                alt="Twitter link SVG icon"
                width={17}
                height={17}
              />
            </a>
          </Link>
          <Link href="https://discord.gg/WBHzy3n7">
            <a>
              <Image
                src="/icons/discord.svg"
                alt="Discord link SVG icon"
                width={20}
                height={20}
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
