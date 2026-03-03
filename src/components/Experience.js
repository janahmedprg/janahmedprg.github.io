import React from "react";
import "../css/Experience.css";

const Timeline = ({ title, events }) => (
  <article className="exp-card">
    <h3>{title}</h3>
    <div className="exp-timeline">
      {events.map((event) => (
        <div
          className="exp-event"
          key={`${event.organization}-${event.role}-${event.period}`}
        >
          <div className="exp-event-head">
            <h4>{event.organization}</h4>
            <span className="exp-period">{event.period}</span>
          </div>
          <p>{event.role}</p>
        </div>
      ))}
    </div>
  </article>
);

function Experience() {
  const educationEvents = [
    {
      organization: "University of Delaware",
      role: "B.S. in Computer Science",
      period: "2020 - 2024",
    },
    {
      organization: "University of Delaware",
      role: "B.S. in Applied Mathematics",
      period: "2020 - 2024",
    },
  ];

  const experienceEvents = [
    {
      organization: "Amazon Web Services",
      role: "SDE",
      period: "2024 - Present",
    },
    {
      organization: "University of Delaware",
      role: "Researcher",
      period: "2022 - 2024",
    },
    {
      organization: "Amazon Web Services",
      role: "Software Engineer Intern",
      period: "Summer 2023",
    },
    {
      organization: "University of Delaware",
      role: "Researcher",
      period: "2021 - 2022",
    },
  ];

  const teachingEvents = [
    {
      organization: "University of Delaware",
      role: "Classroom and Lab Assistant",
      period: "2022 - 2024",
    },
    {
      organization: "University of Delaware",
      role: "Homework and Exams Grader",
      period: "2022 - 2024",
    },
    {
      organization: "University of Delaware",
      role: "Mathematics Tutor",
      period: "2021 - 2024",
    },
  ];

  return (
    <div className="exp-con">
      <h2 id="experience">Experience</h2>
      <div className="experience-grid">
        <Timeline title="Education" events={educationEvents} />
        <Timeline title="Work Experience" events={experienceEvents} />
        <Timeline title="Teaching" events={teachingEvents} />
      </div>
    </div>
  );
}

export default Experience;
