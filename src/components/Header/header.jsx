"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ModeToggle } from "../modetoggle/Mode-toggle";
import Logo from "../Logo/logo";
import SideNavbar from "./SideNavbar";
import { debounce } from "lodash";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        setIsOpen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <div className="flex justify-between px-6 py-3">
            <Logo />
            {isOpen ? <SideNavbar /> : <Navbar />}

            <ModeToggle />
        </div>
    );
}
