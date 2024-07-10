import {
    TOOL_NAME,
    TOOL_VERSION,
    TOOL_DESCRIPTION,
    TOOL_NOTICE,
    AUTHOR,
    GITHUB_REPO,
    DISCORD_URL,
    DOCUMENTATION_WEBSITE
} from "@/constants/base";
import Link from "next/link";
import { IconArrowUpRight, IconBrandDiscordFilled, IconBrandGithubFilled } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="p-4 h-fit space-y-3 border-t-[1px]">
            <div className="w-full mb-4">
                <p className="text-7xl">{TOOL_NAME}<span className="text-sm">{TOOL_VERSION}</span></p>
            </div>
            <div className="text-left items-center px-1">
                <p className="text-sm">{TOOL_DESCRIPTION}</p>
                <p className="text-sm text-red-400">{TOOL_NOTICE}</p>
                <p className="text-sm">
                    Created by <Link href={`https://github.com/${AUTHOR}`} target="_blank" rel="noopener noreferrer" className="underline">{AUTHOR}</Link>
                </p>
            </div>
            <div className="flex flex-row w-fit items-center justify-center space-x-3">
                <Link href={GITHUB_REPO} className="flex w-8 h-8 bg-white rounded-full items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithubFilled className="h-6 w-6 text-black" />
                </Link>
                <Link href={DISCORD_URL} className="flex w-8 h-8 bg-white rounded-full items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <IconBrandDiscordFilled className="h-6 w-6 text-black" />
                </Link>
                <Link href={DOCUMENTATION_WEBSITE} className="flex w-8 h-8 bg-white rounded-full items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <IconArrowUpRight className="h-6 w-6 text-black" />
                </Link>
            </div>
        </footer>
    )
}
