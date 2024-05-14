"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SidebarItemsNav from "./SidebarItemsNav";
import { LinkItemsNav } from "@/src/constants/data";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-9">
              <div className="space-y-1">
                <SidebarItemsNav items={LinkItemsNav} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarMobile;
