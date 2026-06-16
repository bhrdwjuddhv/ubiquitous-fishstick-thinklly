import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            isActive
                ? "bg-[#C8553D] text-white shadow-md"
                : "text-[#222222] hover:bg-[#F2D06B]/40 hover:text-[#C8553D]"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-[#F9F1DC] border-b border-[#C8553D]/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    <Link
                        to="/"
                        className="font-['Fredericka_the_Great'] text-3xl text-[#C8553D]"
                    >
                        Thinklly
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-3 font-['Karla']">
                        <NavLink to="/login" className={navLinkClass}>
                            Login
                        </NavLink>

                        <NavLink to="/dashboard" className={navLinkClass}>
                            Dashboard
                        </NavLink>

                        <NavLink to="/trial-form" className={navLinkClass}>
                            Trial Form
                        </NavLink>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#C8553D]"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 flex flex-col gap-2 font-['Karla']">
                        <NavLink
                            to="/login"
                            className={navLinkClass}
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            className={navLinkClass}
                            onClick={() => setIsOpen(false)}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/trial-form"
                            className={navLinkClass}
                            onClick={() => setIsOpen(false)}
                        >
                            Trial Form
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}