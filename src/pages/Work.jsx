import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  const projects = [

      {
      title: "chat app/group chatting",
      desc: "My chatty ",
      img: "./chat.png",
      live: "https://chatty-frontend-zeta.vercel.app",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "Framer Motion", "Tailwind", "Next.js"],
    },
    
    {
      title: "Music player cloud",
      desc: " listen music with your frends and have a chat with em also see what they are listening to e funiture using puter and MERN stack.",
      img: "./spotify.jpg",
      live: "https://spofity-clone.onrender.com",
      git: "https://github.com/Ravikynoobcoder/spotify-clone",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Roomify",
      desc: " Roomify . a smart way to visualize your floor plans and architure with AI and inside funiture using puter and MERN stack.",
      img: "./roomify.png",
      live: "https://roomify-gold-one.vercel.app",
      git: "https://github.com/Ravikynoobcoder/roomify",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "product-store",
      desc: " A full-stack Product Store web application built using React for the frontend and PostgreSQL for the backend database. It allows users to browse products, view details, powered by a REST API.",
      img: "./pro.png",
      live: "https://front-product-store.vercel.app",
      git: "https://github.com/Ravikynoobcoder/front-product-store",
      tech: ["React", "Node.js", "Postgress", "Express"],
    },
    
    {
      title: "ZegoStream",
      desc: " ZegoStream is a vidoecalling web app that connect people and friends using the powerful zegocloud api",
      img: "./zego.png",
      live: "https://zegocall-ten.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/roomify",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },  

  
    
    {
      title: "My Notes Mk2",
      desc: "My Notes, makes notes and things with user login and searching ,pinning and tagging as well",
      img: "./notes-mk2.png",
      live: " https://notes-mk2-front.vercel.app",
      git: "https://github.com/Ravikynoobcoder/note",
      tech: ["React", "Framer Motion", "Tailwind", "Next.js"],
    },
    {
      title: "My Notes",
      desc: "My NOtes, makes notes and things",
      img: "./notes.png",
      live: "https://note-1-4ssu.onrender.com",
      git: "https://github.com/Ravikynoobcoder/note",
      tech: ["React", "Framer Motion", "Tailwind", "Next.js"],
    },

     {
      title: "calendly",
      desc: "Calendly is a modern, visually immersive productivity application that reimagines how users interact with time and tasks.  backgrounds with a clean  to create a seamless user experience.",
      img: "./calendly.png",
      live: "https://calendly-beige.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/url-shortner",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },

   
    {
      title: "PrepMateAI",
      desc: "PrepMateAI — AI-powered interview prep tool using Google's Gemini AI. Get tailored technical questions, code snippets, and saved sessions.",
      img: "./ai.png",
      live: "https://prepmate-ai-nine.vercel.app",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "Gemini AI", "Node.js", "MongoDB"],
    },
     
    {
      title: "Expense Tracker Mark3",
      desc: "Expense Tracker — Smart MERN app for managing income & expenses with charts and dashboards for financial insights.",
      img: "./expense.png",
      live: "https://expense-tracker-gamma-dun.vercel.app",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "Charts.js", "MongoDB", "Node.js"],
    },
   
    {
      title: "Expense Tracker Mark2",
      desc: "Expense Tracker — lighter version of expense tracker with graphs and table visualizeation",
      img: "./image.png",
      live: " https://expense-tracker-1-ikhi.onrender.com",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "Charts.js", "MongoDB", "Node.js"],
    },
    {
      title: "Expense Tracker Mark1",
      desc: "Expense Tracker — lighter version of expense tracker with graphs and table visualizeation",
      img: "./mark1-ex.png",
      live: "https://expense-mark1.onrender.com",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "Charts.js", "MongoDB", "Node.js"],
    },
  {
      title: "Resume Builder",
      desc: "Resume Builder — A MERN app that helps users create professional resumes with multiple templates and export as PDF.",
      img: "./resume.png",
      live: "https://resume-three-cyan.vercel.app",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "PDF.js", "MongoDB", "Node.js"],
    },
     
    {
      title: "React agriculture site",
      desc: " this is a site made with react,framer,lucid, tailwin that is used to track the cultivation ,plantation and agricultural related activtites around the word ",
      img: "./terra.png",
      live: "https://react-practice-agriculture-site.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["React", "tailwind","framer", "lucide"],
    },
    
    {
      title: "Github-Landing-react",
      desc: "Gitclone — a fronend git landing page with lucide animation and interactive user friendly design and ui.",
      img: "./git.png",
      live: "https://github-landing-fron.netlify.app/",
      git: "  https://github.com/Ravikynoobcoder/calendly/tree/main",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    }
  ,
    {
      title: "Custom CArd",
      desc: "Design and customize cards",
      img: "./card.png",
      live: "https://customcard12.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["javascrict","css","tailwindcss"],
    }
    ,
    {
      title: "Pathfinding-visualizer",
      desc: "this pathfinding visualizer shows how differnting pathfinding algorighm works by seaching their neighbours and it does so for 4 differnet kind of algos like A* , Dijkstra etc",
      img: "./path.png",
      live: "https://pathfinder-visualizer-ruby.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["javascrict","css","tailwindcss"],
    },
    {
      title: "sorting visualizer",
      desc: "A web-based sorting visualizer that demonstrates how popular sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and Insertion Sort work through real-time animations.",
      img: "./sorting.png",
      live: "hhttps://sorting-visualizer-sooty-five.vercel.app/",
      git: "https://github.com/Ravikynoobcoder/",
      tech: ["javascrict","css","tailwindcss"],
    },
     {
      title: "SnipScan",
      desc: "SnipScan — A responsive URL Shortener app built with MERN, enabling users to create short links and QR codes for easy sharing and scanning.",
      img: "./quick1.png",
      live: "https://frontend-u7v0.onrender.com",
      git: "https://github.com/Ravikynoobcoder/url-shortner",
      tech: ["React", "Node.js", "MongoDB", "QR Code"],
    },
  
      
    
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
         {/* banner for backend/ fullstack */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
             Fullstack Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>
          
          {/* Fullstack projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* {projects.map((project, index) => (
            
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index
                  ? "scale-105 -translate-y-3 shadow-2xl"
                  : "hover:-translate-y-2"
              } ${cardBg} group relative`}
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIndex === index
                      ? "bg-black/40 opacity-100"
                      : "bg-black/0 opacity-0"
                  }`}
                ></div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textPrimary}`}>
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${
                      hoveredIndex === index ? "scale-105" : "scale-100"
                    } ${
                      isDark
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                    }`}
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
                      hoveredIndex === index ? "scale-105" : "scale-100"
                    } ${
                      isDark
                        ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
                    }`}
                  >
                    <FaGithub className="text-sm" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))} */}


            {/* this was replaced  for above */}
          {projects.map((project, index) => {
            if (index < projects.length - 6) {
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
                    hoveredIndex === index
                      ? "scale-105 -translate-y-3 shadow-2xl"
                      : "hover:-translate-y-2"
                  } ${cardBg} group relative`}
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        hoveredIndex === index
                          ? "bg-black/40 opacity-100"
                          : "bg-black/0 opacity-0"
                      }`}
                    ></div>
                  </div>

                  <div className="p-6 flex flex-col justify-between h-[280px]">
                    <div>
                      <h3
                        className={`text-2xl font-bold mb-3 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className={`text-sm ${textPrimary}`}>
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2.5 py-1 rounded-full ${
                            isDark
                              ? "bg-blue-900/50 text-blue-300"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                      {/* live link and github */}
                    {/* <div className="flex gap-3 mt-4">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                      <a href={project.git} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </div> */}
                      {/* replaed with this */}
                    <div className="flex gap-3 mt-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${
                hoveredIndex === index ? "scale-105" : "scale-100"
              } ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              <FaExternalLinkAlt className="text-sm" /> Live
            </a>

            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
                hoveredIndex === index ? "scale-105" : "scale-100"
              } ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
              }`}
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
              })}
        </div>

          {/* banner for frontend  */}
        <div className="text-center mb-16 mt-20">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Frontend Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>
       

       {/* Frontend projects */}
       <div className="border border-gray-300 rounded-2xl p-6 shadow-lg">
  <h3 className="text-2xl font-semibold mb-6 text-center">
    
  </h3>

  <div className="flex flex-wrap gap-8 justify-center">
    {projects.map((project, index) => {
      if (index >= projects.length - 6) {
        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-full sm:w-[45%] lg:w-[30%] rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
              hoveredIndex === index
                ? "scale-105 -translate-y-3 shadow-2xl"
                : "hover:-translate-y-2"
            } ${cardBg} group relative`}
          >
            <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
              <img
                src={project.img}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-[280px]">
              <div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p className={`text-sm ${textPrimary}`}>
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      isDark
                        ? "bg-blue-900/50 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex gap-3 mt-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div> */}

              <div className="flex gap-3 mt-4">
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${
      hoveredIndex === index ? "scale-105" : "scale-100"
    } ${
      isDark
        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
    }`}
  >
    <FaExternalLinkAlt className="text-sm" /> Live
  </a>

  <a
    href={project.git}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
      hoveredIndex === index ? "scale-105" : "scale-100"
    } ${
      isDark
        ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300"
        : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
    }`}
  >
    <FaGithub className="text-sm" /> GitHub
  </a>
                </div>
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Work;
