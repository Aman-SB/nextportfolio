import React, { useState, useEffect } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { pageData as data } from "@/utils/navbar";
import Link from "next/link";
import { divide } from "lodash";

export default function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <div className="w-[80vw]">
            <Menubar className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto rounded-t-[30px] border border-yellow-300 justify-center bg-yellow-400 dark:bg-background ">
                {data.map((page, index) => (
                    <MenubarMenu key={index}>
                        <MenubarTrigger>
                            <Link href={page.path}>{page.desc}</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                ))}
            </Menubar>
        </div>
    );
}
