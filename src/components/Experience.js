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
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universtiy of Delaware
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Bachelor of Science
          </h4>
          <p> Double major in Applied Mathematics and Computer Science.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Mathematics Tutor</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universtiy of Delaware
          </h4>
          <p>
            Provided academic support to students enrolled in Calculus, Linear
            Algebra, Discrete Math and Probability classes.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lab Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delaware
          </h4>
          <p>
            Demonstrated leadership and teaching skills by guiding and assisting
            10-20 students weekly during computer science lab sessions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Homework and Exams Grader
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delaware
          </h4>
          <p>
            Graded homework and exams for both Linear Algebra and Introduction
            to Proof courses.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Dev Engineer I
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Amazon</h4>
          <p>
            Added a job metric tracker to the AWS Glue dashboard, improving data
            monitoring capabilities of AWS Glue. Designed and implemented a tool
            utilizing Spark in Scala to monitor data freshness.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
