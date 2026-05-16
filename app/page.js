"use client";

import React from "react";

export default function SuvarnaPortfolio() {
  const [darkMode, setDarkMode] = React.useState(false);

  const resumeLink =
    "https://drive.google.com/file/d/1PvwtrOEaXlFYn3cAPCz1X8VEOFHBJzpy/view?usp=sharing";

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"],

    frameworks: [
      "React",
      "Next.js",
      "TensorFlow",
      "PyTorch",
      "NumPy",
      "pandas",
      "Packet Tracer",
      "Visual Studio",
    ],

    tools: ["Git", "SQL", "Linux", "Eclipse", "Tableau"],
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "SSSN Software Pvt. Ltd",
      duration: "2022 – 2023",

      points: [
        "Developed Android messaging applications and improved system performance.",
        "Collaborated with UI/UX teams to improve responsiveness and user experience.",
        "Built testing frameworks and improved application reliability.",
      ],
    },

    {
      title: "Software Test Engineer",
      company: "Qualcomm",
      duration: "2021 – 2022",

      points: [
        "Performed manual and automated testing to improve product quality.",
        "Reduced failure rates through detailed hardware and software analysis.",
        "Improved product reliability and testing efficiency.",
      ],
    },
  ];

  const projects = [
    {
      title: "Credit Card Fraud Detection Using Federated Learning",

      description:
        "Developed a fraud detection system using Autoencoders and RBM models with federated learning techniques.",
    },

    {
      title: "Social Network Analysis Using Centrality Measures",

      description:
        "Built interactive network visualizations improving analytical efficiency and user engagement.",
    },
  ];

  const publications = [
    {
      title:
        "Review of Feature Selection Methods and Semi Supervised Feature Selection Algorithms for Classification",

      journal: "International Journal of Software Computing and Testing",

      date: "August 7, 2020",

      url:
        "https://computers.journalspub.info/index.php?journal=JSCT&page=article&op=view&path%5B%5D=598",

      description:
        "Comprehensive survey of semi-supervised feature selection methods for improving learning performance.",
    },

    {
      title:
        "Context Aware Physical Activity Recognition Using Social Objects",

      journal:
        "International Journal of Computer Science and Programming Language",

      date: "July 13, 2020",

      url: "https://www.journalspub.com",

      description:
        "Smartphone-based activity recognition system capable of classifying human physical activities.",
    },

    {
      title:
        "Credit Card Fraud Detection Using Federated Learning Techniques",

      journal:
        "International Journal of Scientific Research in Science, Engineering and Technology",

      date: "June 11, 2020",

      url: "https://ijsrset.com/IJSRSET207380",

      description:
        "Implemented Autoencoder and RBM algorithms within a federated learning framework to predict fraudulent users.",
    },

    {
      title: "Critical Care Monitoring with Event Priorization Using IoT",

      journal:
        "International Journal of Scientific Research in Computer Science, Engineering and Information Technology",

      date: "March 31, 2018",

      url: "https://ijsrcseit.com/CSEIT1833436",

      description:
        "Designed an IoT healthcare monitoring architecture for prioritizing critical patient data.",
    },
  ];

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-slate-950 to-slate-800 text-white py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <div className="flex justify-end mb-6">

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-white/20 px-4 py-2 rounded-xl"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

            </div>

            <h1 className="text-6xl font-extrabold mb-6">
              Suvarna Ramu
            </h1>

            <p className="text-2xl text-gray-300 mb-6">
              Software Engineer | Frontend Developer | AI/ML Enthusiast
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Results-driven Software Engineer with expertise in frontend
              development, software engineering, QA testing, and machine learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=suvarnaadityan@gmail.com&su=Job%20Opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold"
              >
                Contact Me
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/suvarnaramu"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-2xl font-semibold"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <div className="bg-white/10 rounded-3xl p-10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              Quick Overview
            </h2>

            <div className="space-y-5 text-lg">

              <div>
                <span className="font-semibold">Location:</span> Manassas,
                Virginia, USA
              </div>

              <div>
                <span className="font-semibold">University:</span> George Mason University
              </div>

              <div>
                <span className="font-semibold">Degree:</span> M.S. Computer Science
              </div>

              <div>
                <span className="font-semibold">GPA:</span> 3.54 / 4.0
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6 text-black">
              Languages
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full text-black"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6 text-black">
              Frameworks
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full text-black"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6 text-black">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full text-black"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-8 text-black">
            Certifications
          </h2>

          <h3 className="text-2xl font-semibold text-black mb-4">
            The Complete Tableau Bootcamp for Aspiring Data Scientists
          </h3>

          <p className="text-gray-700 mb-6">
            Hands-on experience in Tableau dashboards, analytics,
            data visualization, charts, and reporting.
          </p>

          <a
            href="https://coursera.org/verify/6NPF0BX7RLFD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 text-white px-5 py-3 rounded-2xl font-semibold"
          >
            View Certification
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-950 text-white py-16 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let’s Connect
          </h2>

          <div className="flex justify-center gap-4 flex-wrap mb-8">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=suvarnaadityan@gmail.com&su=Job%20Opportunity"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="tel:+15715551234"
              className="border border-white px-6 py-3 rounded-2xl font-semibold"
            >
              Call Me
            </a>

          </div>

          <p className="text-gray-300">
            Email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=suvarnaadityan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 ml-2"
            >
              suvarnaadityan@gmail.com
            </a>
          </p>

          <p className="text-gray-300 mt-3">
            Address: Manassas, Virginia, USA
          </p>

          <p className="text-gray-500 mt-10">
            © 2026 Suvarna Ramu. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}