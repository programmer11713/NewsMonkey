import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <ul className="horizontal-list">
        <div className="container">
          <li className="nav__heading">
            <Link to='/'><h2>NewsMonkey</h2></Link>
          </li>
        </div>
        <div className="container">
          <li className="list__item">
            <Link to='/'>General</Link>
          </li>
          <li className="list__item">
            <Link to='/sports'>Sports</Link>
          </li>
          <li className="list__item">
            <Link to='/politics'>Politics</Link>
          </li>
          <li className="list__item">
            <Link to='/technology'>Technology</Link>
          </li>
          <li className="list__item">
            <Link to='/business'>Business</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
