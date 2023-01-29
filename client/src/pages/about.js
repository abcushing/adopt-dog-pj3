import React from "react";
import { Card } from "semantic-ui-react";
import Header from "../components/header";

function About() {
  return (
    <div>
      <Header></Header>
      about here
      <Card.Group>
        <Card color="blue">
          <Card.Content>
            <Card.Header>Alex Cushing</Card.Header>
            <Card.Description>info here</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Evan Hughes</Card.Header>
            <Card.Description>info here</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Kameron Lanier</Card.Header>
            <Card.Description>info here</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default About;
