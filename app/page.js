"use client";
import React from "react";

export default function SuvarnaPortfolio() {
  const [darkMode, setDarkMode] = React.useState(false);

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"],
    frameworks: [
      "React",
      "Next.js",
      "TensorFlow",
      "PyTorch",
      "NumPy",
      "pandas",
      "Scikit-learn",
    ],
    tools: ["Git", "Tableau", "SQL", "Linux", "Eclipse"],
  };

  const certifications = [
    {
      title: "The Complete Tableau Bootcamp for Aspiring Data Scientists",
      provider: "Coursera",
      description:
        "Hands-on experience in data visualization, dashboard creation, and business analytics using Tableau.",
    },
  ];

  const experiences = [
    {
      title: "Software Developer",
      company: "SSSN Software Pvt. Ltd",
      duration: "2022 – 2023",
      points: [
        "Developed Android messaging applications and improved system performance by 20%.",
        "Collaborated with UI/UX teams to enhance user experience and responsiveness.",
        "Built testing frameworks improving application reliability and stability.",
      ],
    },
    {
      title: "Software Test Engineer",
      company: "Qualcomm",
      duration: "2021 – 2022",
      points: [
        "Performed manual and automated testing to improve product quality.",
        "Reduced failure rates by 15% through detailed hardware and software analysis.",
        "Improved product reliability and testing efficiency.",
      ],
    },
  ];

  const projects = [
    {
      title: "Credit Card Fraud Detection using Deep Learning",
      description:
        "Developed a fraud detection system using Autoencoders and RBM models achieving up to 99% prediction accuracy.",
    },
    {
      title: "Social Network Analysis Using Centrality Measures",
      description:
        "Built interactive network visualizations improving analytical efficiency and user engagement.",
    },
  ];

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white transition-all duration-500"
          : "min-h-screen bg-gray-100 text-gray-800 transition-all duration-500"
      }
    >
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-white/20 px-4 py-2 rounded-xl hover:scale-105 transition"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Suvarna Ramu
            </h1>

            <p className="text-2xl text-gray-300 mb-6">
              Software Engineer | Frontend Developer | AI/ML Enthusiast
            </p>

            <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
              Results-driven Software Engineer with experience in software
              development, QA testing, frontend engineering, and machine
              learning. Passionate about building scalable applications and
              solving complex technical challenges.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:suvarnaadityan@gmail.com"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/suvarnaramu"
                target="_blank"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:scale-105 transition duration-500">
            <h2 className="text-3xl font-bold mb-8">Quick Overview</h2>

            <div className="space-y-5 text-lg">
              <div>
                <span className="font-semibold">Location:</span> Manassas,
                Virginia, USA
              </div>

              <div>
                <span className="font-semibold">Education:</span> M.S.
                Computer Science and Engineering
              </div>

              <div>
                <span className="font-semibold">University:</span> George Mason
                University
              </div>

              <div>
                <span className="font-semibold">GPA:</span> 3.4 / 4.0
              </div>

              <div>
                <span className="font-semibold">Actively Seeking:</span>{" "}
                Software Engineering, Frontend Development, QA Automation, and
                AI/ML opportunities across the United States
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition duration-300">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed text-gray-700">
            I am a highly motivated Software Engineer with industry experience
            in software development, QA testing, frontend engineering, and
            AI/ML applications. My background combines strong technical
            expertise with problem-solving skills, allowing me to build
            efficient and user-focused applications.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-4xl font-bold">Technical Skills</h2>

            <p className="text-gray-500 mt-2 text-lg">
              Technologies and tools used to build modern applications.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg">
            Open to Full-Time Opportunities
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6">Languages</h3>

            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6">
              Frameworks & Libraries
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-6">Tools</h3>

            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Professional Experience
          </h2>

          <p className="text-gray-500 text-lg">
            Industry experience focused on development, testing, and
            optimization.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-semibold">{exp.title}</h3>

                  <p className="text-lg text-gray-600">{exp.company}</p>
                </div>

                <div className="text-gray-500 font-medium">
                  {exp.duration}
                </div>
              </div>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real-world projects demonstrating expertise in AI, data
              visualization, and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:scale-105 transition duration-500 shadow-2xl"
              >
                <h3 className="text-3xl font-semibold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{cert.title}</h3>

              <p className="text-blue-600 font-medium mb-4">
                {cert.provider}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-slate-950 to-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great Together
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Actively seeking Software Engineering opportunities in the United
            States and excited to contribute technical expertise and innovation
            to impactful teams.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:suvarnaadityan@gmail.com"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="tel:+15715551234"
              className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              Call Me
            </a>
          </div>

          <div className="mt-10 text-gray-400 space-y-2">
            <p>Email: suvarnaadityan@gmail.com</p>
            <p>Location: Manassas, Virginia, USA</p>
            <p>LinkedIn: linkedin.com/in/suvarnaramu</p>
          </div>

          <p className="mt-10 text-gray-500 text-sm">
            © 2026 Suvarna Ramu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}