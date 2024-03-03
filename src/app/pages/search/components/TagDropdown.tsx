"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface DropdownMenuCheckboxesProps {
  tags: { name: string }[];
  onTagChange: (tag: string) => void;
  name: string;
}

interface CheckboxState {
    [key: string]: Checked;
  }
  
  export function DropdownMenuCheckboxes(props: DropdownMenuCheckboxesProps) {
    const [checkboxStates, setCheckboxStates] = React.useState<CheckboxState>({});
  
    const handleCheckboxChange = (tag: string, checked: Checked) => {
      setCheckboxStates((prevStates) => ({
        ...Object.fromEntries(Object.keys(prevStates).map((key) => [key, false])),
        [tag]: checked,
      }));
  
      if (checked) {
        props.onTagChange(tag);
      }
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="mr-4">{props.name}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-1/4">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {props.tags.map((tagObj) => (
            <DropdownMenuCheckboxItem
              key={tagObj.name}
              checked={checkboxStates[tagObj.name] || false}
              onCheckedChange={(checked) => handleCheckboxChange(tagObj.name, checked)}
            >
              {tagObj.name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  