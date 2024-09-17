import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const NewsList = () => {
  // Initialize state with useState hooks
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);

  // Fetch news using useEffect (runs on component mount)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=38fbd5fcf3ad41dd9b1e3251546f12d7');
        setNews(response.data.articles); // Set news data in state
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, []); // Empty array to ensure it runs only once when the component mounts

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter news based on search query
  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="col-10 mx-auto my-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange} // Update search query when input changes
        />
      </div>
      <div>
        <Container className="col-11 mx-auto">
          <Row>
            {
              filteredNews.length > 0 ? (
                filteredNews.map((item, index) => (
                  <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <p>{new Date(item.publishedAt).toLocaleDateString()}</p>
                        <Card.Text>{item.description}</Card.Text>
                        <a className="btn btn-primary" target="_blank" rel="noreferrer" href={item.url}>Detail</a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col className="text-center">
                  <p>Tidak Ada Data</p>
                </Col>
              )
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewsList;
