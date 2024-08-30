import React from "react";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@mui/icons-material/School";
// import WorkIcon from "@mui/icons-material/Work";
import "../css/Experience.css";

const Timeline = ({ title, events }) => (
  <div className="container">
    <h2>{title}</h2>
    <div className="timeline">
      {events.map((event, index) => (
        <div className="event" key={index}>
          <h4>{event.title}</h4>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);

function Experience() {
  const educationEvents = [
    {
      title: "University of Delaware",
      description: "B.S. in Computer Science, 2020 - 2024",
    },
    {
      title: "University of Delaware",
      description: "B.S. in Applied Mathematics, 2020 - 2024",
    },
  ];

  const experienceEvents = [
    {
      title: "Capital One (Senior Design)",
      description: "Software Engineer, 2023 - 2024",
    },
    { title: "University of Delaware", description: "Researcher 2022 - 2024" },
    {
      title: "Amazon",
      description: "Software Development Engineer Intern, Summer 2023",
    },
    { title: "University of Delaware", description: "Researcher 2021 - 2022" },
  ];

  const teachingEvents = [
    {
      title: " University of Delaware",
      description: "Classroom and Lab Assistant, 2022 - 2024",
    },
    {
      title: "University of Delaware",
      description: "Homework and Exams Grader, 2022 - 2024",
    },
    {
      title: "University of Delaware",
      description: "Mathematics tutor, 2021 - 2024",
    },
  ];

  return (
    <div className="exp-con">
      <h2 id="experience">Experience</h2>
      <div className="experience">
        <Timeline title="Education" events={educationEvents} />
        <Timeline title="Work Experience" events={experienceEvents} />
        <Timeline title="Teaching" events={teachingEvents} />
      </div>
    </div>
  );
}

export default Experience;
