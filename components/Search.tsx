"use client"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { useEffect, useState } from "react"
import Link from "next/link"
import { category } from "@/data/category";
import { dashboard } from "@/data/dashboard";

export function Search() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Dashboard">
                    {dashboard.map((component) => (
                        <Link href={component.href}><CommandItem>{component.title}</CommandItem></Link>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Category">
                    {category.map((component) => (
                        <Link href={component.href}><CommandItem>{component.title}</CommandItem></Link>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
