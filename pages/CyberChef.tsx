
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconCirclePlus } from "@tabler/icons-react"
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
        <Command className=" border shadow-md h-[100vh]">
            <CommandInput placeholder="Search..." />
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
        <div className="grid lg:grid-cols-5">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                    <Tabs defaultValue="music" className="h-full space-y-6">
                        <div className="space-between flex items-center">
                            <TabsList>
                                <TabsTrigger value="music" className="relative">
                                    Music
                                </TabsTrigger>
                                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                                <TabsTrigger value="live" disabled>
                                    Live
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto mr-4">
                                <Button>
                                    <IconCirclePlus className="mr-2 h-4 w-4" />
                                    Add music
                                </Button>
                            </div>
                        </div>
                        <TabsContent
                            value="music"
                            className="border-none p-0 outline-none"
                        >
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        Listen Now
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Top picks for you. Updated daily.
                                    </p>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="relative">
                                <ScrollArea>
                                </ScrollArea>
                            </div>
                            <div className="mt-6 space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Made for You
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Your personal playlists. Updated daily.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="relative">
                                <ScrollArea>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="podcasts"
                            className="h-full flex-col border-none p-0 data-[state=active]:flex"
                        >
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        New Episodes
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Your favorite podcasts. Updated daily.
                                    </p>
                                </div>
                            </div>
                            <Separator className="my-4" />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}