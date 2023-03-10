import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="whole-container">
      <Navbar />
      <News />
      <Footer />
    </div>
  );
}

export default App;
