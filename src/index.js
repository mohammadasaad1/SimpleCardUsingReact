import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img src="mohammadAsaad.jpg" className="avatar" alt="Mohammad Asaad" />
  );
}
function Intro() {
  return (
    <div>
      <h1>Mohammad Asaad</h1>
      <p>
        Full-stack web and a student at PTUK. When not coding , I like to play
        fortnite , chess , to cook (and eat), or to just enjoy the palestinian
        roads.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="#3219" emoji="💪🏻" />
      <Skill skill="JS" color="orangered" emoji="👌" />
      <Skill skill="C++" color="blue" emoji="❤️" />
      <Skill skill="CSS" color="red" emoji="💪🏻" />
      <Skill skill="HTML" color="green" emoji=":)" />
    </div>
  );
}
function Skill(props) {
  const { skill, emoji, color } = props;
  return (
    <div className="skill" style={{ backgroundColor: `${color}` }}>
      {skill} {emoji}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
