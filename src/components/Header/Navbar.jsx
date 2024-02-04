import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { pageData as data } from "@/utils/navbar";
import Link from "next/link";

export default function Navbar() {
    return (
        <Menubar>
            {data.map((page) => (
                <MenubarMenu key={page.desc}>
                    <MenubarTrigger>
                        <Link href={page.path}>{page.desc}</Link>
                    </MenubarTrigger>
                </MenubarMenu>
            ))}
        </Menubar>
    );
}
