"use client";

import Link from "next/link";
import SidebarMobile from "./SidebarMobile";
import NavbarIconUser from "./NavbarIconUser";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20 bg-blue-400">
        <nav className="h-14 flex items-center justify-between px-4">
          <div className="hidden lg:block">
            <Link href={"#"}>
              <h1 className="text-xl font-extrabold text-white">Open Course</h1>
            </Link>
          </div>
          <div className={cn("block lg:!hidden")}>
            <SidebarMobile />
          </div>

          <div className="flex items-center gap-2">
            <NavbarIconUser />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
