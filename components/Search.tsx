"use client";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "./ui/command";

interface SearchProps {
  onSelect: (componentName: string) => void;
}

const availableComponents = ["ComponentA", "ComponentB"];

export function Search({ onSelect }: SearchProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredComponents, setFilteredComponents] =
    useState(availableComponents);
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

  useEffect(() => {
    const filtered = availableComponents.filter((component) =>
      component.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredComponents(filtered);
  }, [searchQuery]);

  const handleSelect = (componentName: string) => {
    onSelect(componentName);
    setIsCommandOpen(false);
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <>
      {isCommandOpen && (
        <Command className="fixed border shadow-md h-[50vh] w-[70vw] z-[9999] bg-black">
          <CommandInput
            ref={inputRef}
            placeholder="Search Or ⌘ + K"
            value={searchQuery}
            onValueChange={handleInputChange}
          />
          <CommandList className="bg-black">
            {filteredComponents.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            <CommandGroup heading="Components">
              {filteredComponents.map((component) => (
                <CommandItem
                  key={component}
                  onSelect={() => handleSelect(component)}
                >
                  <span>{component}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      )}
    </>
  );
}
