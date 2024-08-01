"use client";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "./ui/command";

export function Search() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      setIsCommandOpen((prev) => !prev);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setIsCommandOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isCommandOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCommandOpen]);

  const handleSelect = () => {
    setIsCommandOpen(false);
  };

  return (
    <>
      {isCommandOpen && (
        <Command className="fixed border shadow-md h-[50vh] w-[70vw] z-[9999]">
          <CommandInput ref={inputRef} placeholder="Search Or ⌘ + K" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <Link href="/" onClick={handleSelect}>
                <CommandItem>
                  <span>Home</span>
                </CommandItem>
              </Link>
              <Link href="/misc" onClick={handleSelect}>
                <CommandItem>
                  <span>Miscellaneous</span>
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      )}
    </>
  );
}
