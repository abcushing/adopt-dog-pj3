import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Body from "./components/Body";
import NavBar from "./components/navbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: `/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  const [current, setCurrent] = useState("search");
  const [breed, setBreed] = useState("Saluki");

  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <section>
            <NavBar setCurrent={setCurrent} setBreed={setBreed} />
            <Body
              current={current}
              setCurrent={setCurrent}
              breed={breed}
              setBreed={setBreed}
            />
          </section>
        </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
