import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"

export default function Misc() {
    return (
        <div className="min-h-screen">
            <Tabs defaultValue="cyberchef" className="space-y-4">
                {/* Tabs */}
                <TabsList>
                    <TabsTrigger value="cyberchef">
                        CyberChef
                    </TabsTrigger>
                </TabsList>

                {/* Tabs Content */}
                <TabsContent value="cyberchef" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}