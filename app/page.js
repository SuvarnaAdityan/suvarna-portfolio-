export default function SuvarnaPortfolio() {
  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "C", "C++", "Python", "Java"],
    frameworks: ["Git", "Eclipse", "NumPy", "pandas", "Matplotlib", "PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
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
    "Review of Feature Selection Methods and Semi Supervised Feature Selection Algorithms for Classification",
    "Context Aware Physical Activity Recognition Using Social Objects",
    "Credit Card Fraud Detection Using Federated Learning Techniques",
    "Critical Care Monitoring with Event Prioritization Using IoT"
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Suvarna Ramu</h1>
            <p className="text-xl mb-6 text-gray-200">
              Software Developer | Frontend Developer | AI/ML Enthusiast
            </p>
            <p className="leading-relaxed text-gray-300">
              Computer Engineering graduate with expertise in frontend development,
              responsive design, Android application development, software testing,
              and machine learning concepts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:suvarnaadityan@gmail.com"
                className="bg-white text-slate-900 px-5 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/suvarnaramu"
                target="_blank"
                className="border border-white px-5 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
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
                <span className="font-semibold text-white">GPA:</span> 3.4 / 4.0
              </div>
              <div>
                <span className="font-semibold text-white">Open To:</span> Software Engineering, Frontend Development, QA Testing, AI/ML Roles
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
            I am a passionate software engineer with professional experience in
            software development and testing. I enjoy building responsive web
            applications, improving user experiences, and working on machine
            learning projects that solve real-world problems. I am currently
            seeking opportunities in the United States where I can contribute my
            technical expertise while continuing to grow professionally.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Database Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.databases.map((skill) => (
                <span key={skill} className="bg-slate-100 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
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
        <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white p-8 rounded-3xl shadow-lg">
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
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Publications</h2>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <ul className="space-y-4 list-disc pl-6 text-gray-700">
            {publications.map((publication) => (
              <li key={publication}>{publication}</li>
            ))}
          </ul>
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
              <p className="text-gray-500">GPA: 3.4 / 4.0</p>
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

          <div>
            <h3 className="text-xl font-semibold mb-2">
              The Complete Tableau Bootcamp for Aspiring Data Scientists
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Gained hands-on experience in data visualization, dashboard
              creation, interactive charts, and business data analysis using
              Tableau.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-300 mb-6">
            I am actively seeking job opportunities in the United States.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:suvarnaadityan@gmail.com"
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
