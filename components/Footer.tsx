import {
    TOOL_NAME,
    TOOL_VERSION,
    TOOL_DESCRIPTION,
    TOOL_NOTICE,
    AUTHOR
} from "@/data/constants";
import Link from "next/link";
import { IconArrowUpRight, IconBrandDiscordFilled, IconBrandGithubFilled } from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="p-4 h-fit space-y-3 border-t-[1px]">
            <div className="w-full mb-4">
                <p className="text-7xl">{TOOL_NAME}<span className="text-sm">{TOOL_VERSION}</span></p>
            </div>
            <div className="text-left items-center px-1 space-y-2">
                <p className="text-sm">{TOOL_DESCRIPTION}</p>
                <p className="text-sm text-red-400">{TOOL_NOTICE}</p>
                <p className="text-sm">
                    Created by <Link href={`https://github.com/${AUTHOR}`} target="_blank" rel="noopener noreferrer" className="underline">{AUTHOR}</Link>
                </p>
            </div>
        </footer>
    )
}
