import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about-me" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.style.transition = "background-color 0.3s ease-in-out";
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="bg-slate-300 dark:bg-gray-900 shadow-lg p-4 transition-all duration-300">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                    Rozimurodov
                </Link>

                <div className="hidden md:flex gap-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                className="relative"
                            >
                                <Link
                                    to={item.path}
                                    className={`text-sm font-medium transition-all duration-300 ${isActive
                                        ? "text-gray-900 dark:text-white font-semibold"
                                        : "dark:text-gray-400"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        className="absolute left-0 bottom-0 h-[2px] bg-gray-900 dark:bg-white"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTimeout(() => setDarkMode(!darkMode), 200)}
                        className="transition-all duration-300"
                    >
                        {darkMode ? (
                            <FiSun size={24} className="text-yellow-400 transition-all duration-300" />
                        ) : (
                            <FiMoon size={24} className="text-gray-700 transition-all duration-300" />
                        )}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col gap-4 bg-slate-200 dark:bg-gray-800 p-4 rounded-md mt-2 transition-all duration-300"
                    >
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-sm font-medium block text-center p-2 rounded-md transition-all duration-300
                                    ${isActive
                                            ? "bg-gray-900 dark:bg-gray-700 text-white font-semibold"
                                            : "hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-400"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
