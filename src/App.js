import "./App.css";
import Body from "./components/body.js";
import Card from "./components/card.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
// import "./components/navbar.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
