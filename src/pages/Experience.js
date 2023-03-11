import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bronx High School For the Visual Arts
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          General Assembly
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>

          <p> Software Engineering Certification </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Aliana’s Pizzeria - Sales Associate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York, NY
          </h4>
          <p>Lead digital marketing campaigns and in person advertisement.
	Oversaw inventory by tracking and completing orders.
  Managed the work environment and employees.
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            85 Deli mini market Corp - Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York , NY 
          </h4>
          <p>
          Lead digital marketing campaigns through social media.
	   Inventory/Sales Management.
     with vendors to negotiate pricing and served as a primary point of contact for the store.

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
