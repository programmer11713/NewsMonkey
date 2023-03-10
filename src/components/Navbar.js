export default function Navbar() {
  return (
    <nav className="top-nav">
      <ul className="horizontal-list">
        <div className="container">
          <li className="nav__heading">
            <a href='/'><h2>NewsMonkey</h2></a>
          </li>
        </div>
        <div className="container">
          <li className="list__item">
            <a href='/'>Home</a>
          </li>
          <li className="list__item">
            <a href='/sports'>Sports</a>
          </li>
          <li className="list__item">
            <a href='/politics'>Politics</a>
          </li>
          <li className="list__item">
            <a href='/weather'>Weather</a>
          </li>
          <li className="list__item">
            <a href='/business'>Business</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
