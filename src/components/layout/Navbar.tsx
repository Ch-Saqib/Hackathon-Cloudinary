"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import HamburgerMenuButton from "../Hamburg/HamburgerMenuButton";
import SideMenu from "../Hamburg/SideMenu";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center ">
          <div className="flex gap-2 items-center justify-center">
            <Link href="/">
              <Image src="/album.png" alt="icon" width="50" height="50" />
            </Link>
            <h1 className="text-2xl font-semibold">Saqib App</h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <HamburgerMenuButton onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {(!menuOpen || menuOpen) && (
          <div
            className={`w-full md:w-1/5 md:flex-shrink-0 lg:block ${
              !menuOpen ? "block" : "hidden"
            }`}
          >
            <SideMenu folders={[]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
