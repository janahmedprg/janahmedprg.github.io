import React from "react";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
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
      description:
        " B.S. in Applied Mathematics and B.S. in Computer Science; Cum Laude (GPA: 3.94/4.00)",
    },
  ];

  const experienceEvents = [
    {
      title: "Software Development Engineer Intern",
      description: "Amazon, Summer 2023",
    },
  ];

  const teachingEvents = [
    {
      title: "Teaching Assistant",
      description: "University of Delaware, Fall 2022",
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
