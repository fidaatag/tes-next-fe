"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";

const NavbarIconUser = () => {

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8 flex items-center">
              <AvatarImage
                src={""}
                alt={""}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
  );
};

export default NavbarIconUser;
