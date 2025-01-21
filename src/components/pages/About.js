import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css"; // Import default styles
import dayjs from "dayjs"; // Import Day.js
import Footer from '../footer/Footer';
import "../styles/About.css";

const About = () => {
  const [activityData, setActivityData] = useState([]);
  const [repoCount, setRepoCount] = useState(0); // State to store repository count since 2022

  // Fetch GitHub contribution data for the logged-in user (change the username)
  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/RangoSS/events/public`
        );
        const data = await response.json();

        // Filter commit events from the GitHub API response
        const commitData = data.filter((event) => event.type === "PushEvent");

        // Map the commit data to the required format for the heatmap
        const formattedData = commitData.map((event) => ({
          date: dayjs(event.created_at).format("YYYY-MM-DD"),
          count: event.payload.commits.length,
        }));

        setActivityData(formattedData);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      }
    };

    // Fetch repository count since 2022, including pagination
    const fetchRepoCountSince2022 = async () => {
      let repoCount = 0;
      let page = 1;
      const perPage = 100; // GitHub API returns up to 100 repositories per page

      try {
        while (true) {
          const response = await fetch(
            `https://api.github.com/users/RangoSS/repos?per_page=${perPage}&page=${page}`
          );
          const data = await response.json();

          // If no more repositories are returned, break the loop
          if (data.length === 0) break;

          // Filter repositories created since 2022
          const filteredRepos = data.filter((repo) =>
            dayjs(repo.created_at).isAfter(dayjs("2022-01-01"))
          );

          // Accumulate the count of filtered repos
          repoCount += filteredRepos.length;

          page++; // Move to the next page
        }

        setRepoCount(repoCount); // Set the total repository count since 2022
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchGitHubActivity();
    fetchRepoCountSince2022(); // Fetch the repository count since 2022 when the component mounts
  }, []);

  // Get the first day of 2024 and today's date for calendar range
  const startDate = dayjs("2024-01-01").format("YYYY-MM-DD");
  const endDate = dayjs().format("YYYY-MM-DD");

  return (
    <>
      <Container className="about-container">
        <Row>
          {/* Left Column */}
          <Col md={8}>
            <h2>Know Who I Am</h2>
            <p>
              Hi everyone, I am <strong>Phathutshedzo</strong> from Venda, South Africa. I was
              born and raised in Venda, but due to my school and job hunting, I am currently
              residing in Pretoria. I have a passion for software development and have
              pursued my qualifications in programming to build a strong career in the tech
              industry.
            </p>

            <p>
              I have completed my studies through UNISA (University of South Africa). Along
              with my academic qualifications, I have earned two Microsoft certifications:
            </p>
            <ul>
              <li>Microsoft Certified: Azure Fundamentals</li>
              <li>Microsoft MD-102: Endpoint Administrator</li>
            </ul>

            <h3>Apart from Coding, Here Are Some Activities I Love!</h3>
            <ul>
              <li>Playing Games</li>
              <li>Writing Tech Blogs</li>
              <li>Travelling</li>
            </ul>

            <blockquote>
              "Strive to build things that make a difference!"
            </blockquote>
          </Col>

          {/* Right Column - Profile Picture */}
          <Col md={4}>
            <div className="profile-picture">
              <img src="/portf.jpg" alt="Phathutshedzo" className="img-fluid" />
            </div>
          </Col>
        </Row>

        {/* Tools I Use Section */}
        <h3 className="centered-heading">Tools I Use</h3>
        <p>Here are some of the tools I work with:</p>
        <div className="tools-container">
          <div className="tool-card">
            <i className="fas fa-code"></i>
            <p>VS Code</p>
          </div>
          <div className="tool-card">
            <i className="fab fa-git"></i>
            <p>Git</p>
          </div>
          <div className="tool-card">
            <i className="fab fa-github"></i>
            <p>GitHub</p>
          </div>
          <div className="tool-card">
            <i className="fab fa-docker"></i>
            <p>Docker</p>
          </div>
          <div className="tool-card">
            <i className="fas fa-paper-plane"></i>
            <p>Postman</p>
          </div>
          <div className="tool-card">
            <i className="fas fa-tasks"></i>
            <p>Jira</p>
          </div>
        </div>

        {/* GitHub Activity Heatmap Section */}
        <h3 className="centered-heading">My GitHub Activity</h3>
        <p>Here’s my activity heatmap from GitHub:</p>
        <div className="github-activity">
          {activityData.length > 0 ? (
            <CalendarHeatmap
              startDate={startDate} // Start from January 1st, 2024
              endDate={endDate} // End at today's date
              values={activityData} // Pass the activity data
              showWeekdayLabels={true} // Optional: show weekday labels
              weekdayLabels={["S", "M", "T", "W", "T", "F", "S"]} // Optional: custom weekday labels
              colorRange={["#d6e685", "#8cc665", "#44a340", "#1e6823"]} // Color gradient for activity levels
            />
          ) : (
            <p>Loading GitHub activity...</p>
          )}
        </div>

        {/* Display total repositories count since 2022 */}
        <h4 className="centered-heading">
          Total Repositories Since 2022: {repoCount}
        </h4>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
