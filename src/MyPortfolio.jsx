
import React from "react";

export function MyPortfolio() {
  return (
    <div style={styles.container}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyPortfolio</h2>

        <div style={styles.navLinks}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#skills" style={styles.link}>Skills</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" style={styles.home}>
        <div>
          <p style={styles.welcome}>WELCOME TO MY PORTFOLIO</p>

          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.name}>Santra Mamali</span>
          </h1>

          <h2 style={styles.role}>React JS Developer</h2>

          <p style={styles.description}>
            I am a passionate Frontend Developer with experience
            in developing responsive and user-friendly web applications
            using React JS, JavaScript, HTML and CSS.
          </p>

          <a href="#contact" style={styles.button}>
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>

        <p style={styles.sectionText}>
          I completed my B.Tech in Computer Science in 2024.
          I have around 2.10 years of experience in frontend development.
          I enjoy creating responsive user interfaces, integrating APIs
          and developing real-time web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>

        <div style={styles.skills}>
          {["HTML", "CSS", "JavaScript", "React JS",
            "Redux", "Bootstrap", "REST API", "Responsive Design"
          ].map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>My Projects</h2>

        <div style={styles.projects}>

          <div style={styles.projectCard}>
            <h3>Integrated NOC</h3>
            <p>
              Developed frontend modules for No Objection Certificate
              applications, including college affiliation and
              management-related workflows.
            </p>
          </div>

          <div style={styles.projectCard}>
            <h3>Student Migration NOC</h3>
            <p>
              Developed student migration application workflows
              with form validations and API integrations.
            </p>
          </div>

          <div style={styles.projectCard}>
            <h3>HRMS Application</h3>
            <p>
              Worked on HRMS modules including employee details,
              loan management and vehicle bill status.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>

        <p style={styles.sectionText}>
          Interested in working together? Feel free to contact me.
        </p>

        <p>Email: Your email address</p>
        <p>Location: India</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Santra Mamali | React JS Developer
      </footer>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
    margin: 0,
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 8%",
    backgroundColor: "#0f172a",
    color: "white",
    flexWrap: "wrap",
  },

  logo: {
    color: "#38bdf8",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  home: {
    minHeight: "450px",
    display: "flex",
    alignItems: "center",
    padding: "60px 10%",
    backgroundColor: "#e0f2fe",
  },

  welcome: {
    color: "#0284c7",
    fontWeight: "bold",
    letterSpacing: "2px",
  },

  heading: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  name: {
    color: "#0284c7",
  },

  role: {
    color: "#475569",
    fontSize: "28px",
  },

  description: {
    maxWidth: "650px",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#0284c7",
    color: "white",
    padding: "12px 25px",
    borderRadius: "6px",
    textDecoration: "none",
    marginTop: "15px",
  },

  section: {
    padding: "55px 10%",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "30px",
    color: "#0f172a",
    marginBottom: "25px",
  },

  sectionText: {
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  skills: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },

  skillCard: {
    padding: "15px 25px",
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    borderRadius: "8px",
    fontWeight: "bold",
  },

  projects: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },

  projectCard: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#f1f5f9",
    borderRadius: "10px",
    textAlign: "left",
    lineHeight: "1.7",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
};
