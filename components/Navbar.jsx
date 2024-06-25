"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../components/NavLink";

import { FaTwitter } from "react-icons/fa6";
import {
  FaLinkedin,
  FaLinkedinIn,
  FaPinterestSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { usePathname } from "next/navigation";

const links = [
  { url: "/", title: "HOME" },
  { url: "/about", title: "ABOUT" },
  { url: "/portfolio", title: "PORTFOLIO" },
  { url: "/contact", title: "CONTACT" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        {/* <Link href="/">
          <Image
            src={
              pathName === `/` ? `/signlogonobg.png` : `/dbwebdevlogotext.png`
            }
            width={300}
            height={260}
            alt="dbwebdev.io"
          />
        </Link> */}
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <FiGithub size="30" />
        </Link>
        {/* <Link href="#">
          <FaInstagram size="30" />
        </Link> */}
        <Link href="#">
          <FaLinkedinIn size="30" />
        </Link>
        {/* <Link href="#">
          <FaPinterestP size="30" />
        </Link> */}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
          <div className="w-10 h-1 bg-[#7AF98A] rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
