import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiNetlify } from "react-icons/si";

function Home() {
    const text = "Mening portfolio sahifamga xush kelibsiz !!!";

    const letterAnimation = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05 }
        })
    };

    const socialVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    const socialLinks = [
        { href: "https://github.com/Rozimuxammed", icon: <FaGithub />, hoverColor: "#0c0c0c" },
        { href: "https://mail.google.com/mail/u/0/?hl=ru#inbox", icon: <BiLogoGmail />, hoverColor: "#a07653" },
        { href: "https://www.instagram.com/rz.muxammed/", icon: <FaInstagram />, hoverColor: "#f718be" },
        { href: "https://t.me/rzmuxammed", icon: <FaTelegram />, hoverColor: "#0088cc" },
        { href: "https://app.netlify.com/teams/rozimuxammed/sites?creator=me", icon: <SiNetlify />, hoverColor: "#01bdba" },
        { href: "https://www.linkedin.com/in/rozimuhammad-rozimurodov-76737027a/", icon: <FaLinkedin />, hoverColor: "#0077b5" },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-auto mt-28 p-4 text-gray-900 dark:text-white">
            <img
                className="object-cover rounded-3xl cursor-pointer transition-transform duration-300 hover:scale-105
                w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
                src="/me.jpg"
                alt="Profile"
            />

            <motion.h1
                className="text-center mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-geist flex flex-wrap justify-center max-w-xl lg:max-w-3xl"
                initial="hidden"
                animate="visible"
                style={{ whiteSpace: "pre-wrap" }}
            >
                {text.split("").map((char, index) => (
                    <motion.span key={index} custom={index} variants={letterAnimation} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.div
                className="w-screen flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 bg-slate-200 dark:bg-gray-800 
                p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg shadow-lg mt-8"
                initial="hidden"
                animate="visible"
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl transition-all duration-300"
                        variants={socialVariants}
                        custom={index}
                        whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            color: link.hoverColor
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}

export default Home;
