import React from "react";
import { Card } from "semantic-ui-react";
import Header from "../components/header";

function About() {
  return (
    <div>
      <Header></Header>
      <h1>About</h1>
      <Card.Group>
        <Card color="red">
          <Card.Content>
            <Card.Header>Alex Cushing</Card.Header>
            <Card.Description>
              {" "}
              <a
                href="https://github.com/abcushing"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="pink">
          <Card.Content>
            <Card.Header>Evan Hughes</Card.Header>
            <Card.Description>
              {" "}
              <a
                href="https://github.com/evanhu96"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="purple">
          <Card.Content>
            <Card.Header>Kameron Lanier</Card.Header>
            <Card.Description>
              {" "}
              <a
                href="https://github.com/kamkam2299"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default About;
