"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
    const path = usePathname();
    return (
        <>
            <li className={`${path == "/" ? "bg-[#1A2312] text-lime-400" : ""} px-1 font-bold hover:text-lime-400 text-[#9CA3AF] rounded-2xl`}><Link href="/">Workouts</Link></li>

            <li className={`${path == "/my-plan" ? "bg-[#1A2312] text-lime-400" : ""} py-2 md:py-0 lg:pl-1 font-bold hover:text-lime-400 text-[#9CA3AF] rounded-2xl`}><Link href="/my-plan">My Plan</Link></li>
        </>
    );
};

export default NavLinks;