"use client";

import { cn } from "@/src/lib/utils";
import { ItemsNav } from "@/src/types"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react";

interface SidebarItemsNavProps {
  items: ItemsNav[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const SidebarItemsNav = ({items, setOpen} : SidebarItemsNavProps) => {
  const path = usePathname();

  if (!items?.length) {
    return null
  }

  return (
    <>
      <nav>
      {items.map((item, index) => {
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
      </nav>
    </>
  )
}

export default SidebarItemsNav