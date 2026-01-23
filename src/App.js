import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-900 text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>

          <a
            href="/Akhildas Java Resume.pdf"
            download
            className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header
        id="home"
        className="bg-slate-900 text-white pt-32 pb-16 px-6 flex justify-center"
      >
        <div className="max-w-4xl bg-slate-800 rounded-2xl p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">

          

          {/* TEXT */}
          <div>
            <h1 className="text-4xl font-bold">S Akhildas</h1>
            <p className="text-xl mt-2 text-gray-300">
              Full-Stack Java Developer
            </p>

            <p className="mt-6 leading-relaxed text-gray-200">
              Full-Stack Java Developer with 6 months of internship experience,
              skilled in building end-to-end web applications using Java 21,
              Spring Boot, REST APIs, and React. Focused on clean code,
              scalable architecture, and maintainable solutions.
            </p>

            <a
              href="/Akhildas Java Resume.pdf"
              download
              className="inline-block mt-6 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Java 21</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>Hibernate / JPA</li>
              <li>Spring Security (Basics)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Tailwind CSS, Bootstrap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Database</h3>
            <ul className="list-disc list-inside">
              <li>MySQL</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Tools & Workflow</h3>
            <ul className="list-disc list-inside">
              <li>Git & GitHub</li>
              <li>VS Code, IntelliJ IDEA</li>
              <li>Maven, Gradle</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">
                Smart Service Portal for Local Freelancers
              </h3>
              <p>
                Full-stack platform connecting local freelancers with customers
                using React, Spring Boot, and MySQL.Developed a dynamic web-based platform that bridges the gap between local freelancers and clients seeking digital and offline services. The system was built using Core Java, JSP, Servlets, and MySQL, providing seamless service posting, user authentication, and role-based access control for both freelancers and clients. Designed and implemented a responsive, user-friendly interface with efficient database connectivity for real-time data operations. The project enhanced service visibility, simplified client-freelancer interactions, and demonstrated strong proficiency in Java full-stack web development and MVC architecture.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Property Rental And Management System
              </h3>
              <p>
               Property Rental and Management System is a full-stack web application developed during my Full-Stack Java Developer internship to streamline and digitalize property listing, rental operations, and tenant management processes. The application enables property owners and administrators to manage property listings, tenant records, and rental workflows through a centralized and role-based system. The frontend was built using React.js to deliver a responsive and interactive user experience, while the backend was developed using Java with JSP and Servlets. MySQL was used for database management, following the MVC architecture to ensure scalability, maintainability, and clean separation of concerns. The project was developed using Eclipse IDE, deployed on Apache Tomcat, and version-controlled using Git, with a strong focus on secure data handling, optimized CRUD operations, and real-world application development practices.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Attendance Register
              </h3>
              <p>
                Designed and developed a web-based attendance management system using Spring Boot and MySQL to automate the process of tracking student attendance. Implemented CRUD operations for adding, updating, and viewing attendance records with secure authentication and role-based access for admins and users. Designed a responsive front-end interface using HTML, CSS, and JavaScript for real-time data interaction. The project demonstrates proficiency in RESTful API development, Spring MVC architecture, and full-stack integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p>
          Full-Stack Java Developer Intern at Techzmatrix Software Technologies, where I gained hands-on experience in designing and developing scalable web applications. Actively worked on building and consuming RESTful APIs, implementing seamless frontend–backend integration using React and Java-based technologies, and managing relational data using MySQL. Contributed to version control, collaborative development, and code maintenance using Git, while following best practices for clean code, modular architecture, and real-world software development workflows.
        </p>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="bg-emerald-900 text-emerald-50 py-16"
      >
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            Contact Me
          </h2>

          <p className="text-center mb-2">
            Email: <strong>akhildassjithu@gmail.com</strong>
          </p>

          <p className="text-center mb-10">
            Feel free to reach out for collaborations or freelance work.
          </p>

          <form className="bg-emerald-50 text-gray-900 rounded-xl p-8 space-y-6">
            <input className="w-full p-3 border rounded-lg" placeholder="Name" />
            <input className="w-full p-3 border rounded-lg" placeholder="Email" />
            <input className="w-full p-3 border rounded-lg" placeholder="Subject" />
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="5"
              placeholder="Message"
            ></textarea>

            <button className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800">
              Submit
            </button>
          </form>

          <div className="mt-10 text-center">
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Akhildas01"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Akhildas01
              </a>
            </p>

            <p className="mt-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/s-akhil-das-3b2466278"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/s-akhil-das-3b2466278
              </a>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
