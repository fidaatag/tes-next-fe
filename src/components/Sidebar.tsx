"use client";

import { cn } from "@/src/lib/utils";
import SidebarItemsNav from "./SidebarItemsNav";
import { LinkItemsNav } from "@/src/constants/data";

const Sidebar = () => {
  return (
    <>
      <nav
        className={cn(`relative hidden h-screen border-r pt-10 lg:block w-72`)}
      >
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <SidebarItemsNav items={LinkItemsNav} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
