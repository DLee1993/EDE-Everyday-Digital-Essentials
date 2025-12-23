import Password from "@/components/credentials-generator/Password";
import Pin from "@/components/credentials-generator/Pin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CredentialsGenerator() {
    return (
        <div className="flex w-full max-w-2xl flex-col gap-6">
            <Tabs defaultValue="password">
                <TabsList className="w-52 mb-10">
                    <TabsTrigger value="password" className="cursor-pointer">
                        Password
                    </TabsTrigger>
                    <TabsTrigger value="pin" className="cursor-pointer">
                        Pin
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="password">
                    <Password />
                </TabsContent>
                <TabsContent value="pin">
                    <Pin />
                </TabsContent>
            </Tabs>
        </div>
    );
}
