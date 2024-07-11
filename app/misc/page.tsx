import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import CyberChef from "@/pages/CyberChef"

export default function Misc() {
    return (
        <div className="min-h-screen">
            <Tabs defaultValue="cyberchef" className="space-y-4 w-[113%]">
                {/* Tabs */}
                <TabsList>
                    <TabsTrigger value="cyberchef">
                        CyberChef
                    </TabsTrigger>
                </TabsList>

                {/* Tabs Content */}
                <TabsContent value="cyberchef" className="space-y-4 border-[1px] border-white rounded-xl min-h-[100vh]">
                    <CyberChef />
                </TabsContent>
            </Tabs>
        </div>
    )
}