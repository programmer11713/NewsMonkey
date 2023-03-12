import "./App.css";
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  render() { 
    return (
      <Router>
        <div className="whole-container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={this.apiKey} category='general' heading="Top News"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} category="sports" heading="Top Sports News"/>}></Route>
            <Route exact path="/politics" element={<News key="politics"  apiKey={this.apiKey}category="politics" heading="Realted to Politics"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} category="technology" heading="Technology Section"/>}></Route>
            <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} category="business" heading="The Business News"/>}></Route>
            <Route exact path="*" element={<NotFound/>}></Route>
          </Routes>
          <Footer />
        </div>  
      </Router>
    );
  }
}
 
export default App;