import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  // add objects to this array
  const TimelineObjects = [
    {
      title: "Registration begins",
      time: "6.00 PM",
      date: "10th SEPT",
    },
    {
      title: "HACKATHON STARTS",
      time: "5.00 PM",
      date: "23rd SEPT",
    },
    {
      title: "HACKATHON ENDS",
      time: "5.00 PM",
      date: "24th SEPT",
    },
    {
      title: "RESULTS",
      time: "6.00 PM",
      date: "24th SEPT",
    },
    {
      title: "RESULTS",
      time: "6.00 PM",
      date: "25th SEPT",
    },
  ];

  return (
    <div className="timelineDiv" style={{ marginTop: "50px" }}>
      <a
        href="https://www.sih.gov.in/sih2023PS"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <div className="head1">
          For SIH '23' Problem statements click here{" "}
        </div>{" "}
      </a>

      <h1
        style={{
          textTransform: "uppercase",
          fontWeight: 700,
          letterSpacing: "1px",
          fontSize: window.innerWidth > 786 ? "48px" : "30px",
        }}
      >
        Timeline
      </h1>

      <div>
        <VerticalTimeline lineColor="black">
          {TimelineObjects.map((data, index) => {
            let contentStyle = {};

            const colorIndex = index % 4;

            // Assign different background colors based on the index
            if (colorIndex === 0) {
              contentStyle = {
                background: "rgb(255 92 75)", // Red
                color: "black",
                borderRadius: "2rem",
              };
            } else if (colorIndex === 1) {
              contentStyle = {
                background: "rgb(250,187,9)", // Yellow
                color: "black",
                borderRadius: "2rem",
              };
            } else if (colorIndex === 2) {
              contentStyle = {
                background: "rgb(94 156 255)", // Blue
                color: "black",
                borderRadius: "2rem",
              };
            } else if (colorIndex === 3) {
              contentStyle = {
                background: "rgb(81 231 111)", // Green
                color: "black",
                borderRadius: "2rem",
              };
            }

            return (
              <VerticalTimelineElement
                className={`vertical-timeline-element--work ${
                  index % 2 === 0 ? "even" : "odd"
                }`}
                contentStyle={contentStyle}
                contentArrowStyle={{ borderRight: "17px solid  black" }}
                date={data.date}
                iconStyle={{ background: "#FABB09", color: "black" }}
                icon={
                  <h2
                    style={{
                      marginTop: window.innerWidth > 786 ? "20px" : "9px",
                    }}
                  >
                    {index + 1}
                  </h2>
                }
              >
                <h1
                  style={{
                    textTransform: "uppercase",
                    fontSize: window.innerWidth > 786 ? "35px" : "28px",
                  }}
                >
                  {data.title}
                </h1>
                <h3>{data.time}</h3>
                <p>{data.para}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
