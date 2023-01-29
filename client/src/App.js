import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("tbd");
function App() {
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <About />
    </Elements>
  );
}

export default App;
