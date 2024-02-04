import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen justify-center items-center flex-col  p-24 border-2">
            <h1>Hello world</h1>
            <button className="px-2 py-2 bg-blue-500 rounded-lg hover:text-white">
                Bttn
            </button>
            <Button variant="destructive">Shadcn ui</Button>
        </main>
    );
}
