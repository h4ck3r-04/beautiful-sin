import * as React from "react";
import Link from "next/link";
import {
    GITHUB_REPO,
    DISCORD_URL,
    DOCUMENTATION_WEBSITE
} from "@/data/constants";
import { category } from "@/data/category";
import { dashboard } from "@/data/dashboard";
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, CommandSeparator } from "./ui/command"

export function Sidebar() {
    return (
        <Command className="border shadow-md h-[100vh]">
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <Link href="/">
                        <CommandItem>
                            <span>Home</span>
                        </CommandItem>
                    </Link>
                </CommandGroup>
                <CommandGroup heading="Dashboard">
                    {dashboard.map((component, index) => (
                        <Link key={index} href={component.href}><CommandItem>{component.title}</CommandItem></Link>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Category">
                    {category.map((component, index) => (
                        <Link key={index} href={component.href}><CommandItem>{component.title}</CommandItem></Link>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Settings">
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Community">
                    <Link href={DOCUMENTATION_WEBSITE}>
                        <CommandItem>
                            <span>Documentation</span>
                        </CommandItem>
                    </Link>
                    <Link href={GITHUB_REPO}>
                        <CommandItem>
                            <span>Github</span>
                        </CommandItem>
                    </Link>
                    <Link href={DISCORD_URL}>
                        <CommandItem>
                            <span>Discord</span>
                        </CommandItem>
                    </Link>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
