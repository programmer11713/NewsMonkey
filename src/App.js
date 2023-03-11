import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="whole-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" category='general' heading="Top News"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" category="sports" heading="Top Sports News"/>}></Route>
          <Route exact path="/politics" element={<News key="politics" category="politics" heading="Realted to Politics"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" category="technology" heading="Technology Section"/>}></Route>
          <Route exact path="/business" element={<News key="business" category="business" heading="The Business News"/>}></Route>
          <Route exact path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer />
      </div>  
    </Router>
  );
}

export default App;
