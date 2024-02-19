"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex items-center gap-4 ml-2">
      <Dropdown placement="bottom-end" className="bg-white">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform "
            src="defaultPic.jpg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2 ">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">user@example.com</p>
          </DropdownItem>
          <DropdownItem key="profile" >
            Profile
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
