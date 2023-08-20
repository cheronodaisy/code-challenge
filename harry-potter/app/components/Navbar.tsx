'use client';
import React from "react";
import Link from "next/link";

interface NavLink {
   label: string;
   url: string;
}

const navLinks: NavLink[] = [
    { label: "Harry Potter Characters", url: "/"},
    { label: "Find Characters", url: "/"},
 
];

const Navbar: React.FC = () => {
    return (
        <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
                <h1 className="text-white text-2x1 font-semibold">
                    Harry Potter<span className="text-yellow-500">App</span>
                </h1>
            </div>
        </nav>
    )
};

export default Navbar;