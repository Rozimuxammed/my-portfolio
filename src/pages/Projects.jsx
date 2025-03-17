import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Des1gn - UI Components",
    description: "Modern UI design components collection.",
    image: "/exam.png",
    link: "https://des1gn.netlify.app/",
  },
  {
    name: "Rock Paper Scissors Game",
    description: "A fun and interactive Rock Paper Scissors game.",
    image: "/rock.png",
    link: "https://scissorsrockpaperr.netlify.app/",
  },
  {
    name: "Matematic Game",
    description: "A fun math-based game.",
    image: "/math.png",
    link: "https://matematicgame.netlify.app/",
  },
  {
    name: "Social Media Dashboard",
    description: "A responsive social media dashboard.",
    image: "/social.png",
    link: "https://socialmediashboard.netlify.app/",
  },
  {
    name: "Typing Game",
    description: "A typing speed test game.",
    image: "/typing.png",
    link: "https://typingamee.netlify.app/",
  },
  {
    name: "Search GitHub Account",
    description: "Find GitHub profiles easily.",
    image: "/github.png",
    link: "https://searchgithubacount.netlify.app/",
  },
  {
    name: "Users Todo Lists",
    description: "Manage tasks efficiently.",
    image: "/userTodo.png",
    link: "https://userstodolists.netlify.app/",
  },
  {
    name: "X O Game",
    description: "Classic Tic-Tac-Toe game.",
    image: "/xo.png",
    link: "https://xox-pi.vercel.app/",
  },
  {
    name: "To Do List",
    description: "Simple and efficient To-Do List.",
    image: "/todoList.png",
    link: "https://todolist-sigma-jade.vercel.app/",
  },
];

function Projects() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <section className="w-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 transition duration-300">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-8">
          <motion.h2
            className="mt-10 text-4xl font-bold text-gray-900 dark:text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {project.description}
                </p>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
