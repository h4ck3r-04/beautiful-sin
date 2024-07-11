import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import CyberChef from "@/pages/CyberChef"

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
                <TabsContent value="cyberchef" className="space-y-4 h-[90vh]">
                    <CyberChef />
                </TabsContent>
            </Tabs>
        </div>
    )
}