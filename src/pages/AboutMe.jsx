import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        name: "Najot Ta'lim",
        description: "Dasturlash bo‘yicha chuqur bilim oldim. JavaScript va React.js texnologiyalarini mukammal o‘rgandim.",
        image: "/najotTalim.png",
    },
    {
        name: "Cambridge Learning Center",
        description: "Bu yerda ingliz tilini o‘rgandim va IELTS tayyorgarlik kurslarida qatnashdim.",
        image: "/cambridge.webp",
    },
    {
        name: "Codial - Zamonaviy Kasblar Akademiyasi",
        description: "Frontend dasturlash bo‘yicha boshlang'ich bilimlarga ega bo‘ldim.",
        image: "/codial.webp",
    },
    {
        name: "Farg‘ona Politexnika Instituti",
        description: "Hozirda 3-kurs talabasi bo‘lib, Moliya va Moliyaviy texnologiyalar sohasida o‘qiyapman.",
        image: "/institut.webp",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 }
    })
};

function AboutMe() {
    return (
        <section className="w-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="mt-10 text-3xl font-bold text-gray-900 dark:text-white mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={1}
                >
                    Assalomu alaykum! Men <span className="font-semibold text-gray-900 dark:text-white">Rozimurodov Rozimuhammad</span>, frontend dasturchiman.
                    <br />
                    <br />
                    Dasturlashni o‘rganish jarayonida turli o‘quv markazlari va akademiyalarda bilim oldim. Quyida men o‘qigan joylar va bu yerdagi tajribalarim haqida ma’lumot berilgan.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={index + 2}
                        >
                            <img
                                src={edu.image}
                                alt={edu.name}
                                className="w-full h-32 object-contain mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.name}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
