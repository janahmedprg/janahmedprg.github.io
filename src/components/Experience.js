import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education vtel"
          date="Sep. 2020 - May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universtiy of Delaware
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Applied Mathematics
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Science
          </h4>
          <ul
            style={{
              fonSize: "10px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            <li>
              <b>GPA:</b> 3.934
            </li>
            <li>
              <b>Co-Founder & Co-President:</b> Competitive Programming Club
            </li>
            <li>
              <b>Directed Reading Program:</b> Reading Introduction to
              Probability Models by Sheldon M. Ross
            </li>
            <li>
              <b>Relevant Coursework:</b> Probability Theory, Linear Algebra,
              Real Analysis, Combinatorics and Graph Theory, Optimization,
              Machine Learning, Data Mining, Algorithms and Advanced
              Programming, and Automata Theory
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work vtel"
          date="Sep. 2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Mathematics Tutor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universtiy of Delaware
          </h4>
          <ul
            style={{
              fonSize: "10px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            <li>
              Provided academic support to students enrolled in Calculus, Linear
              Algebra, Discrete Math and Probability classes.
            </li>
            <li>
              Helped students grasp challenging mathematical concepts and
              achieve academic success in these courses.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb. 2022 - Jun. 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lab Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delaware
          </h4>
          <ul
            style={{
              fonSize: "10px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            <li>
              Collaborated closely with professors from the University of
              Delaware Computer Science Department.
            </li>
            <li>
              Demonstrated leadership and teaching skills by guiding and
              assisting 10-20 students weekly during computer science lab
              sessions.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb. 2022 - Jun. 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Homework and Exams Grader
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delaware
          </h4>
          <ul
            style={{
              fonSize: "10px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            <li>
              Graded homework and exams for both Linear Algebra and Introduction
              to Proof courses.
            </li>
            <li>
              Provided students with constructive feedback to aid in their
              understanding of course materials.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2022 - Nov. 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Dev Engineer I
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon</h4>
          <ul
            style={{
              fonSize: "10px",
              fontWeight: "500",
              marginBottom: "0",
            }}
          >
            <li>
              Added a job metric tracker to the AWS Glue dashboard, improving
              data monitoring capabilities of AWS Glue.
            </li>
            <li>
              Designed and implemented a tool utilizing Spark in Scala to
              monitor data freshness.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
