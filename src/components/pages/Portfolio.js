import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap';
import Footer from '../footer/Footer';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [repos, setRepos] = useState([]); // State to store all repositories
  const [visibleRepos, setVisibleRepos] = useState([]); // State for repositories currently visible
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors
  const [achievements, setAchievements] = useState([]); // State to store achievements

  const reposPerPage = 6; // Number of repos to show per page

  // Function to fetch GitHub repositories with pagination
  const fetchRepos = async () => {
    let allRepos = [];
    let page = 1;
    const perPage = 100; // Max repositories per page
    let hasMore = true;

    try {
      while (hasMore) {
        const response = await fetch(
          `https://api.github.com/users/RangoSS/repos?per_page=${perPage}&page=${page}`
        );

        console.log(response.headers.get('X-RateLimit-Remaining')); // Check remaining requests

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        allRepos = [...allRepos, ...data];

        if (data.length < perPage) {
          hasMore = false;
        } else {
          page += 1;
        }
      }

      const updatedRepos = allRepos.map((repo, index) => ({
        ...repo,
        newId: index + 1, // Assign unique ID
      }));

      setRepos(updatedRepos);
      setVisibleRepos(updatedRepos.slice(0, reposPerPage)); // Show initial batch
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch achievements data from GitHub
  const fetchAchievements = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/RangoSS/events`);
      if (!response.ok) {
        throw new Error(`Error fetching achievements: ${response.status}`);
      }

      const events = await response.json();
      const recentAchievements = events
        .map((event) => ({
          type: event.type,
          repo: event.repo.name,
          createdAt: event.created_at,
        }))
        .slice(0, 6);

      setAchievements(recentAchievements);
    } catch (err) {
      setError(err.message);
    }
  };

  // Load more repositories
  const loadMoreRepos = () => {
    const currentLength = visibleRepos.length;
    const moreRepos = repos.slice(currentLength, currentLength + reposPerPage);
    setVisibleRepos([...visibleRepos, ...moreRepos]);
  };

  // Use useEffect to fetch repositories and achievements on component mount
  useEffect(() => {
    fetchRepos();
    fetchAchievements();
  }, []);

  return (
    <>
      <Container>
        <h1>Portfolio</h1>
        <p>This is the Portfolio page where you can showcase your work and projects.</p>

        {loading && (
          <Spinner animation="border" role="status" className="my-4">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {error && <Alert variant="danger">Failed to fetch repositories or achievements: {error}</Alert>}

        <Row>
          {visibleRepos.map((repo) => (
            <Col key={repo.newId} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{repo.name}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {repo.description || 'No description available.'}
                  </Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {repo.language || 'Not specified'}
                  </Card.Text>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-custom">
                    View on GitHub
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Load More Button */}
        {visibleRepos.length < repos.length && (
          <div className="text-center my-4">
            <Button onClick={loadMoreRepos} variant="secondary">
              Load More
            </Button>
          </div>
        )}

        <div className="my-4 text-center">
          <h3>Check out more on my GitHub</h3>
          <Button href="https://github.com/RangoSS" target="_blank" variant="primary">
            Visit GitHub Profile
          </Button>
        </div>

        <div className="my-4">
          <h3>Recent Achievements</h3>
          <Row>
            {achievements.length > 0 ? (
              achievements.map((achievement, index) => (
                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{achievement.type}</Card.Title>
                      <Card.Text>
                        <strong>Repository:</strong>{' '}
                        <a href={`https://github.com/${achievement.repo}`} target="_blank" rel="noopener noreferrer">
                          {achievement.repo}
                        </a>
                      </Card.Text>
                      <Card.Text>
                        <small>On {new Date(achievement.createdAt).toLocaleString()}</small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col sm={12}>
                <Card>
                  <Card.Body>No recent achievements available.</Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
