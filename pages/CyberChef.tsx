
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, CommandSeparator } from "@/components/ui/command"

type Playlist = (typeof playlists)[number]

const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials",
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
}

function Sidebar({ className, playlists }: SidebarProps) {
    return (
        <Command className="shadow-md h-[90vh] border-[1px]">
            <CommandInput placeholder="Operations" />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Launch</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <span>Profile</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Mail</span>
                    </CommandItem>
                    <CommandItem>
                        <span>Settings</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}


export default function CyberChef() {
    return (
        <div className="grid lg:grid-cols-7">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:border-[1px] h-full flex flex-col overflow-y-auto">
                <div className=" px-4 py-[10px] border-b-[1px]">
                    Recipe
                </div>
            </div>
            <div className="col-span-3 flex flex-col border-[1px]">
                <div className="flex-1 border-b-[1px] flex flex-col">
                    <div className="px-4 py-[10px] border-b-[1px]">
                        Input
                    </div>
                    <Textarea className="flex-1 w-full resize-none" />
                </div>
                <Separator />
                <div className="flex-1">
                    <div className="px-4 py-[10px] border-b-[1px]">
                        Output
                    </div>
                    <div className="flex-1 p-4">
                        {/* Output */}
                    </div>
                </div>
            </div>
        </div>
    )
}