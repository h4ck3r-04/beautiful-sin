import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import RadialDemo from "@/components/RadialDemo"
import Overview from "@/components/Overview"

export default function WebSecurity() {
    return (
        <div className="min-h-screen">
            <Tabs defaultValue="reconnaissance" className="space-y-4">
                {/* Tabs */}
                <TabsList>
                    <TabsTrigger value="reconnaissance">
                        Reconnaissance
                    </TabsTrigger>
                    <TabsTrigger value="discovery">
                        Discovery
                    </TabsTrigger>
                    <TabsTrigger value="vulnerability-analysis">
                        Vulnerability Analysis
                    </TabsTrigger>
                    <TabsTrigger value="exploitation">
                        Exploitation
                    </TabsTrigger>
                    <TabsTrigger value="post-exploitation">
                        Post Exploitation
                    </TabsTrigger>
                    <TabsTrigger value="reporting">
                        Reporting
                    </TabsTrigger>
                </TabsList>

                {/* Tabs Content */}
                <TabsContent value="reconnaissance" className="space-y-4 overflow-y-auto h-[90vh]">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    SQL Injection
                                </CardTitle>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 13.3536C12.1583 13.5488 11.8417 13.5488 11.6465 13.3536L6.39645 8.10355C6.36478 8.07188 6.33824 8.03702 6.31685 8H5.00002C4.78719 8 4.59769 7.86528 4.52777 7.66426L2.12777 0.764277C2.05268 0.548387 2.13355 0.309061 2.3242 0.182972C2.51486 0.0568819 2.76674 0.0761337 2.93602 0.229734L8.336 5.12972C8.44044 5.22449 8.50001 5.35897 8.50001 5.5V5.81684C8.53702 5.83824 8.57189 5.86478 8.60356 5.89645L13.8536 11.1464C14.0488 11.3417 14.0488 11.6583 13.8536 11.8536L12.3536 13.3536ZM8.25 6.95711L7.45711 7.75L12 12.2929L12.7929 11.5L8.25 6.95711ZM3.71669 2.28845L5.35549 7H6.2929L7.50001 5.79289V5.72146L3.71669 2.28845Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">45</div>
                                <p className="text-xs text-muted-foreground">
                                    Critical
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    XSS
                                </CardTitle>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 13.3536C12.1583 13.5488 11.8417 13.5488 11.6465 13.3536L6.39645 8.10355C6.36478 8.07188 6.33824 8.03702 6.31685 8H5.00002C4.78719 8 4.59769 7.86528 4.52777 7.66426L2.12777 0.764277C2.05268 0.548387 2.13355 0.309061 2.3242 0.182972C2.51486 0.0568819 2.76674 0.0761337 2.93602 0.229734L8.336 5.12972C8.44044 5.22449 8.50001 5.35897 8.50001 5.5V5.81684C8.53702 5.83824 8.57189 5.86478 8.60356 5.89645L13.8536 11.1464C14.0488 11.3417 14.0488 11.6583 13.8536 11.8536L12.3536 13.3536ZM8.25 6.95711L7.45711 7.75L12 12.2929L12.7929 11.5L8.25 6.95711ZM3.71669 2.28845L5.35549 7H6.2929L7.50001 5.79289V5.72146L3.71669 2.28845Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+2350</div>
                                <p className="text-xs text-muted-foreground">
                                    High
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">LFI</CardTitle>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 13.3536C12.1583 13.5488 11.8417 13.5488 11.6465 13.3536L6.39645 8.10355C6.36478 8.07188 6.33824 8.03702 6.31685 8H5.00002C4.78719 8 4.59769 7.86528 4.52777 7.66426L2.12777 0.764277C2.05268 0.548387 2.13355 0.309061 2.3242 0.182972C2.51486 0.0568819 2.76674 0.0761337 2.93602 0.229734L8.336 5.12972C8.44044 5.22449 8.50001 5.35897 8.50001 5.5V5.81684C8.53702 5.83824 8.57189 5.86478 8.60356 5.89645L13.8536 11.1464C14.0488 11.3417 14.0488 11.6583 13.8536 11.8536L12.3536 13.3536ZM8.25 6.95711L7.45711 7.75L12 12.2929L12.7929 11.5L8.25 6.95711ZM3.71669 2.28845L5.35549 7H6.2929L7.50001 5.79289V5.72146L3.71669 2.28845Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+12,234</div>
                                <p className="text-xs text-muted-foreground">
                                    Severe
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Active Ports
                                </CardTitle>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 13.3536C12.1583 13.5488 11.8417 13.5488 11.6465 13.3536L6.39645 8.10355C6.36478 8.07188 6.33824 8.03702 6.31685 8H5.00002C4.78719 8 4.59769 7.86528 4.52777 7.66426L2.12777 0.764277C2.05268 0.548387 2.13355 0.309061 2.3242 0.182972C2.51486 0.0568819 2.76674 0.0761337 2.93602 0.229734L8.336 5.12972C8.44044 5.22449 8.50001 5.35897 8.50001 5.5V5.81684C8.53702 5.83824 8.57189 5.86478 8.60356 5.89645L13.8536 11.1464C14.0488 11.3417 14.0488 11.6583 13.8536 11.8536L12.3536 13.3536ZM8.25 6.95711L7.45711 7.75L12 12.2929L12.7929 11.5L8.25 6.95711ZM3.71669 2.28845L5.35549 7H6.2929L7.50001 5.79289V5.72146L3.71669 2.28845Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+573</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Radial Chart</CardTitle>
                                <CardDescription>
                                    You made 265 sales this month.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RadialDemo />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}