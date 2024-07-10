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
import { IconShieldStar } from "@tabler/icons-react";
import {
    TOOL_NAME,
    TOOL_TAGLINE,
    GITHUB_REPO,
    DISCORD_URL,
    DOCUMENTATION_WEBSITE
} from "@/data/constants";

const category: { title: string; href: string; description: string }[] = [
    {
        title: "Web Security",
        href: "/web-security",
        description: "Securing web applications, websites, and web services against various cyber threats.",
    },
    {
        title: "Android Security",
        href: "/android-security",
        description: "Securing Android devices, applications, and the Android ecosystem from cyber threats.",
    },
    {
        title: "iOS Security",
        href: "/ios-security",
        description: "Securing iOS devices, applications, and the iOS ecosystem from cyber threats.",
    },
    {
        title: "Network Security",
        href: "/network-security",
        description: "Protecting networks and their infrastructure from unauthorized access and cyber attacks.",
    },
    {
        title: "Cloud Security",
        href: "/cloud-security",
        description: "Ensuring security for cloud-based services, including data protection and secure access management.",
    },
    {
        title: "Endpoint Security",
        href: "/endpoint-security",
        description: "Securing endpoints such as computers, laptops, and mobile devices from cyber threats.",
    },
    {
        title: "Identity and Access Management (IAM)",
        href: "/iam-security",
        description: "Managing and securing digital identities and controlling access to systems and data.",
    },
    {
        title: "Cryptographic Security",
        href: "/cryptographic-security",
        description: "Ensuring data confidentiality, integrity, and authenticity using encryption and cryptographic techniques.",
    },
    {
        title: "Incident Response and Management",
        href: "/incident-response",
        description: "Developing strategies and procedures for responding to and mitigating cyber security incidents.",
    },
    {
        title: "Penetration Testing (Pen Testing)",
        href: "/penetration-testing",
        description: "Testing systems, networks, or applications to identify vulnerabilities that could be exploited by attackers.",
    },
    {
        title: "Security Operations Center (SOC)",
        href: "/soc",
        description: "Monitoring, detecting, analyzing, and responding to cybersecurity incidents in real-time.",
    },
    {
        title: "Forensics and Digital Investigation",
        href: "/digital-forensics",
        description: "Investigating cybercrimes, collecting digital evidence, and analyzing digital artifacts.",
    },
    {
        title: "IoT Security",
        href: "/iot-security",
        description: "Securing Internet of Things devices and networks from cyber threats.",
    },
    {
        title: "Social Engineering",
        href: "/social-engineering",
        description: "Exploiting human psychology to gain unauthorized access or information.",
    },
    {
        title: "Threat Intelligence",
        href: "/threat-intelligence",
        description: "Collecting, analyzing, and sharing information about cyber threats and adversaries.",
    },
    {
        title: "Blockchain Security",
        href: "/blockchain-security",
        description: "Securing blockchain networks and applications from vulnerabilities and attacks.",
    },
    {
        title: "Reverse Engineering",
        href: "/reverse-engineering",
        description: "Analyzing and understanding software or hardware to uncover vulnerabilities or enhance security.",
    },
    {
        title: "Machine Learning and AI Security",
        href: "/ml-ai-security",
        description: "Securing AI models, algorithms, and data from manipulation, bias, and attacks.",
    },
    {
        title: "Wireless Penetration Testing",
        href: "/wireless-penetration-testing",
        description: "Assessing the security of wireless networks, including Wi-Fi and Bluetooth, to detect and mitigate vulnerabilities.",
    },
];

export function Header() {
    return (
        <div className="flex flex-row justify-between bg-black z-100 fixed top-0 w-full px-2 py-2 items-center">
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
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
                                <ListItem href="/checklist" title="Checklist">
                                    Essential tasks for robust cybersecurity management and compliance.
                                </ListItem>
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
            <p className="font-light text-[12px] hidden md:flex text-gray-400">Press Cmd/Ctrl + k to search</p>
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
