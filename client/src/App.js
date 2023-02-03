import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NavBar from "./components/navbar"
import { BrowserRouter as Routes, Route } from 'react-router-dom';


const stripePromise = loadStripe("tbd");
function App() {
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    // <Elements stripe={stripePromise} options={options}>
<BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
            />
            <Route 
              path="/about" 
              element={<About/>} 
            />
            <Route 
              path="/contact" 
              element={<Contact/>} 
            />
          </Routes>
        </>
      </BrowserRouter>
    // </Elements>
  );
}

export default App;
