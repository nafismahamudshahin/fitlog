import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Logo from "@/assets/logo.png";
const Navbar = () => {
    return (
        <nav className="border-b border-gray-800">
            <div className="container  mx-auto navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 text-sm p-2 shadow">
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    <Link href="/" className="text-xl flex gap-2 justify-center items-center font-bold">
                        <Image width={28} height={28} src={Logo} alt="logo"></Image>
                        <span className="text-white text-2xl">
                            FITLOG
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1 text-sm">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <div className="navbar-end gap-2 text-[#9CA3AF] font-semibold text-sm">
                    <Link href="/my-plan" className="">
                        <div className="flex gap-2">
                            <span>
                                Plan
                            </span>
                            <b className="bg-lime-400 text-black w-6 flex justify-center h-full rounded-full">{0}</b>
                        </div>
                    </Link>
                    <Link href="/my-plan" className="">
                        <div className="flex gap-2">
                            <span>
                                Saved
                            </span>
                            <b className="border text-white w-6 flex justify-center h-full rounded-full">{0}</b>
                        </div>
                    </Link>
                </div>
            </div >
        </nav>
    );
};

export default Navbar;