import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Skill from "./Skill.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact.jsx";
import Qualification from "./Qualification.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Address from "./Address.jsx";

function App() {
  const home = {
    a: "I am passionate about learning new technologies, improving my problem-solving skills, and applying my knowledge to real-world projects.",
    b: "👋 Hello,",
    c: "I'm Raghav Vaishnav",
    d: "Welcome to My Portfolio",
  };

  const projects = {
    a: "My Projects",
    b: "Swiggy Clone",
    c: "Student DashBoard",
    d: "Todo List",
  };

  const address = {
    a: "Address",
    b: "My Address",
    c: "Bijainagar, Ajmer, Rajasthan, India",
  };

  const skills = {
    a: "Programming",
    b: "C, C++, JavaScript",
    c: "Frontend",
    d: "HTML, CSS, React",
    e: "Core Concepts",
    f: "DSA (Basic), Problem Solving",
    g: "Tools",
    h: "Git, VS Code",
  };

  const contacts = {
    a: "Contact Me",
    b: "Phone Number",
    c: "7878364229",
    d: "Email ID",
    e: "raghav20vaishnav@gmail.com",
    f: "LinkedIn",
    g: "www.linkedin.com/in/raghav-vaishnav-9a087a38b",
    h: "GitHub",
    i: "github.com/raghav04vaishnav",
  };

  const intro = {
    a: "About Me",
    b: "Hello, my name is",
    c: "Raghav Vaishnav",
    d: ". I completed my graduation in BCA from Maharshi Dayanand Saraswati University, Ajmer. I have a strong interest in software development. I enjoy learning new technologies and applying them to build real-world projects.",
    e: "I have basic knowledge of programming languages such as C++ and JavaScript, and I am currently exploring web development using React. Coding excites me because it allows me to think logically and create innovative solutions.",
    f: "I have worked on small projects that helped me understand how applications are built. I am always eager to improve my skills and grow as a developer.",
  };

  const quali = {
    a: "Qualification",
    b: "Bachelor of Computer Applications (BCA)",
    c: "Maharshi Dayanand Saraswati University, Ajmer",
    d: "Year: 2022 - 2025",
    e: "Senior Secondary (12th)",
    f: "RBSE Board",
    g: "Year: 2022",
    h: "Secondary (10th)",
    i: "RBSE Board",
    j: "Year: 2020",
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home home={home} />} />

        <Route path="/introduction" element={<Introduction intro={intro} />} />

        <Route
          path="/qualification"
          element={<Qualification quali={quali} />}
        />

        <Route path="/skill" element={<Skill skills={skills} />} />

        <Route path="/projects" element={<Projects projects={projects} />} />

        <Route path="/contact" element={<Contact contacts={contacts} />} />

        <Route path="/address" element={<Address address={address} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
