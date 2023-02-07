import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SearchResults from "./components/SearchResults";
import Body from "./components/Body";
import NavBar from "./components/navbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: `http://localhost:${process.env.PORT}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  const [current, setCurrent] = useState("search");
  const [breed, setBreed] = useState("Saluki");

  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <section>
            <NavBar setCurrent={setCurrent} setBreed={setBreed} />
            <Body
              current={current}
              setCurrent={setCurrent}
              breed={breed}
              setBreed={setBreed}
            />
          </section>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
