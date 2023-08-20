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
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-white text-2x1 font-semibold">
                        Harry Potter<span className="text-yellow-500">App</span>
                    </h1>
                    <ul className="flex items-center space-x-4 md:space-x-8">
                        {navLinks.map((link, index) => (
                            <li>
                                <Link
                                href={link.url}
                                className="text-white hover: text-yellow-500 transition-colors duration-200 "
                                >
                                    {link.label}
                            </Link>
                            </li>
                        ))}
                    </ul>h
                </div>
            </div>
            
        </nav>
    )
};

export default Navbar;