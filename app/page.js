"use client";
import React from "react";

export default function SuvarnaPortfolio() {
  const certifications = [
  {
    title: "The Complete Tableau Bootcamp for Aspiring Data Scientists",
    provider: "Coursera",
    link: "https://coursera.org/verify/6NPF0BX7RLFD",
    description:
      "Hands-on experience in data visualization, dashboard creation, charts, filters, and business analytics using Tableau.",
  },
];

  

  const resumeLink = "https://drive.google.com/file/d/1PvwtrOEaXlFYn3cAPCz1X8VEOFHBJzpy/view?usp=sharing";

  const [darkMode, setDarkMode] = React.useState(false);
  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "C", "C++", "Python", "Java"],
    frameworks: ["Git", "Eclipse", "Visual Studio", "Packet Tracer", "NumPy", "pandas", "Matplotlib", "PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
    databases: ["SQL", "Python Data Querying"],
    systems: ["Windows", "Linux"],
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "SSSN Software Pvt. Ltd",
      duration: "2022 – 2023",
      achievements: [
        "Developed an Android messaging application and improved overall system architecture using Eclipse.",
        "Improved system performance by 20% through code optimization and debugging.",
        "Collaborated with UX/UI teams to create responsive and user-friendly designs.",
        "Increased user satisfaction by 25% with enhanced UI improvements.",
        "Built and executed unit testing frameworks to improve application stability and reliability."
      ]
    },
    {
      title: "Software Test Engineer",
      company: "Qualcomm",
      duration: "2021 – 2022",
      achievements: [
        "Performed manual and automated testing to improve product reliability.",
        "Improved product quality by 30% by identifying and fixing connection failures.",
        "Provided qualification support for memory chips using PINE and RDX boards.",
        "Reduced failure rates by 15% through detailed testing and analysis."
      ]
    }
  ];

  const projects = [
    {
      title: "Credit Card Fraud Detection using Deep Learning Techniques",
      description:
        "Built a backend fraud detection system with a web interface using Python and deep learning models. Achieved 96%–99% prediction accuracy using Auto-encoders and RBM algorithms."
    },
    {
      title: "Social Network Analysis Using Centrality Measures",
      description:
        "Created an interactive web application for social network visualization using JavaScript libraries and improved data processing efficiency by 15 hours per month."
    }
  ];

  const publications = [
  {
    title:
      "Review of Feature Selection Methods and Semi Supervised Feature Selection Algorithms for Classification",
    journal: "International Journal of Software Computing and Testing",
    date: "August 7, 2020",
    url: "https://computers.journalspub.info/index.php?journal=JSCT&page=article&op=view&path%5B%5D=598",
    description:
      "This paper presents an extensive preliminary understanding about feature selection and surveys recent semi-supervised feature selection methods to improve learning performance and algorithm selection.",
  },
  {
    title: "Context Aware Physical Activity Recognition Using Social Objects",
    journal: "International Journal of Computer Science and Programming Language",
    date: "July 13, 2020",
    url: "https://www.journalspub.com",
    description:
      "Proposed a smartphone-based activity recognition system capable of classifying human activities such as sitting, standing, walking, jogging, and stair movement without requiring external servers.",
  },
  {
    title: "Credit Card Fraud Detection Using Federated Learning Techniques",
    journal:
      "International Journal of Scientific Research in Science, Engineering and Technology",
    date: "June 11, 2020",
    url: "https://ijsrset.com/IJSRSET207380",
    description:
      "Implemented Autoencoder and Restricted Boltzmann Machine algorithms within a federated learning framework to identify and predict fraudulent credit card users.",
  },
  {
    title: "Critical Care Monitoring with Event Priorization Using IoT",
    journal:
      "International Journal of Scientific Research in Computer Science, Engineering and Information Technology",
    date: "March 31, 2018",
    url: "https://ijsrcseit.com/CSEIT1833436",
    description:
      "Designed a smart healthcare monitoring architecture using IoT to evaluate patient criticality, prioritize emergency data, and support caregivers and healthcare professionals with real-time monitoring.",
  },
];

  return (
    <div className={darkMode ? "min-h-screen bg-slate-950 text-white transition-all duration-500" : "min-h-screen bg-gray-100 text-gray-800 transition-all duration-500"}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 px-6 animate-fadeIn">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div></div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-white/20 px-4 py-2 rounded-xl text-sm hover:scale-105 transition"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Suvarna Ramu
            </h1>
            <p className="text-xl mb-6 text-gray-200">
              Software Engineer focused on building scalable applications, responsive user experiences, and AI-driven solutions
            </p>
            <p className="leading-relaxed text-gray-300">
              Results-driven Software Engineer with professional experience in software development, quality assurance, and machine learning. Passionate about creating high-performance applications, improving user experience, and solving complex technical challenges with modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:suvarnaadityan@gmail.com?subject=Job%20Opportunity&body=Hello%20Suvarna,"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-5 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href={resumeLink}
                target="_blank"
                className="bg-blue-500 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Download Resume
              </a>

              

              <a
                href="https://www.linkedin.com/in/suvarnaramu"
                target="_blank"
                className="border border-white px-5 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                LinkedIn
              </a>

            <a
              href="tel:+15715551234"
              className="border border-white px-5 py-3 rounded-2xl font-semibold"
            >
              Call Me
            </a>
          </div>

          <div className="mt-8 text-gray-300 space-y-2">
            <p>
              Email:
              <a
                href="mailto:suvarnaadityan@gmail.com?subject=Job%20Opportunity&body=Hello%20Suvarna,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline ml-2"
              >
                suvarnaadityan@gmail.com
              </a>
            </p>
            <p>
              Phone:
              <a
                href="tel:+15715551234"
                className="text-blue-300 hover:underline ml-2"
              >
                +1 (571) 555-1234
              </a>
            </p>
            <p>Address: 8401 Rosebay Ln, Manassas, Virginia, USA</p>
            
          </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:scale-105 transition duration-500">
            <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>
            <div className="space-y-4 text-gray-200">
              <div>
                <span className="font-semibold text-white">Location:</span> Manassas, Virginia, USA
              </div>
              <div>
                <span className="font-semibold text-white">Education:</span> M.S. Computer Science and Engineering
              </div>
              <div>
                <span className="font-semibold text-white">University:</span> George Mason University
              </div>
              <div>
                <span className="font-semibold text-white">GPA:</span> 3.54 / 4.0
              </div>
              <div>
                <span className="font-semibold text-white">Actively Seeking:</span> Software Engineering, Frontend Development, QA Automation, and AI/ML opportunities across the United States
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I am a highly motivated Software Engineer with industry experience in software development, QA testing, frontend engineering, and AI/ML applications. My background combines strong technical expertise with problem-solving skills, allowing me to build efficient, user-focused applications that improve performance and reliability. I enjoy collaborating in fast-paced environments and continuously learning modern technologies to deliver impactful solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <p className="text-gray-500 mt-2 text-lg">
              Technologies and tools used to build scalable and modern applications.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            Open to Full-Time Opportunities
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Database Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.databases.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Operating Systems</h3>
            <div className="flex flex-wrap gap-3">
              {skills.systems.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Professional Experience</h2>
          <p className="text-gray-500 text-lg">
            Industry experience focused on application development, testing, and performance optimization.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {exp.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real-world projects demonstrating expertise in machine learning, data visualization, web technologies, and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:scale-105 transition duration-500 shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-3">Research Publications</h2>
          <p className="text-gray-500 text-lg">
            Published research contributions in AI, machine learning, IoT, and healthcare systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.title}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                {publication.title}
              </h3>

              <div className="space-y-2 mb-5">
                <p className="text-blue-700 font-semibold">
                  {publication.journal}
                </p>

                <p className="text-gray-500 font-medium">
                  Published: {publication.date}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {publication.description}
              </p>

              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-900 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Education</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                George Mason University
              </h3>
              <p className="text-gray-600">
                M.S. Computer Science and Engineering
              </p>
              <p className="text-gray-500">GPA: 3.54 / 4.0</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Anna University</h3>
              <p className="text-gray-600">
                M.E. Computer Science and Engineering
              </p>
              <p className="text-gray-500">GPA: 3.6 / 4.0</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>

          {certifications.map((cert) => (
            <div key={cert.title}>
              <h3 className="text-xl font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-900 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">
                {cert.title}
              </h3>

              <p className="text-blue-600 font-medium mb-4">
                {cert.provider}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-900 text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-950 to-black text-white py-14 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great Together</h2>
          <p className="text-gray-300 mb-6">
            Actively seeking Software Engineering opportunities in the United States and excited to contribute technical expertise, innovation, and strong problem-solving skills to impactful teams.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:suvarnaadityan@gmail.com?subject=Job%20Opportunity&body=Hello%20Suvarna,"
                target="_blank"
                rel="noopener noreferrer"
              className="bg-white text-slate-900 px-5 py-3 rounded-2xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/suvarnaramu"
              target="_blank"
              className="border border-white px-5 py-3 rounded-2xl font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>

          <p className="text-gray-500 mt-8 text-sm">
            © 2026 Suvarna Ramu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
