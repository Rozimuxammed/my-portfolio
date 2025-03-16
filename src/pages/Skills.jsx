import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiSass } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, percent: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: <FaCss3Alt />, percent: 90, color: "from-blue-500 to-indigo-500" },
    { name: "JavaScript", icon: <FaJs />, percent: 85, color: "from-yellow-500 to-orange-400" },
    { name: "React.js", icon: <FaReact />, percent: 80, color: "from-blue-400 to-cyan-400" },
    { name: "Firebase", icon: <SiFirebase />, percent: 75, color: "from-yellow-400 to-amber-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, percent: 85, color: "from-purple-500 to-violet-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percent: 90, color: "from-teal-400 to-blue-400" },
    { name: "SASS", icon: <SiSass />, percent: 80, color: "from-pink-400 to-red-400" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15 }
    })
};

function Skills() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* **Sarlavha** */}
                <motion.h2
                    className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8 tracking-wide"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-3 hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={index + 1}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`text-3xl p-2 rounded-md shadow-sm bg-gradient-to-r ${skill.color}`}>
                                    <span className="text-gray-800 dark:text-white">{skill.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {skill.name}
                                </h3>
                            </div>

                            {/* **Progres bar** */}
                            <div className="mt-3">
                                <div className="relative w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${skill.percent}%` }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                                <p className="text-right text-xs text-gray-700 dark:text-gray-300 mt-1 font-medium">
                                    {skill.percent}%
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
