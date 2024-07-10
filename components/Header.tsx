import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IconShieldStar, IconInfoCircle } from "@tabler/icons-react";
import {
    TOOL_NAME,
    TOOL_TAGLINE,
    GITHUB_REPO,
    DISCORD_URL,
    DOCUMENTATION_WEBSITE
} from "@/data/constants";
import { category } from "@/data/category";
import { dashboard } from "@/data/dashboard";

export function Header() {
    return (
        <div className="flex flex-row justify-between bg-black z-100 fixed top-0 w-full px-2 py-2 items-center align-middle">
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black">
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <IconShieldStar className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">{TOOL_NAME}</div>
                                            <p className="text-sm leading-tight text-muted-foreground">{TOOL_TAGLINE}</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                {dashboard.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black overflow-y-auto max-h-[500px]">
                            <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] ">
                                {category.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/misc" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Miscellaneous
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={DOCUMENTATION_WEBSITE} legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={GITHUB_REPO} legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Github
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={DISCORD_URL} legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Discord
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <p className="md:flex justify-center items-center font-light text-[14px] hidden text-gray-400 h-full"><IconInfoCircle className="w-4 h-4 mr-1" />Press Cmd/Ctrl + k to search</p>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
