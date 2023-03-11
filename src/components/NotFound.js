import {Link} from "react-router-dom";

export default function NotFound() {
  return(
    <div className="not-found-container">
      <img src="https://img.freepik.com/free-vector/defective-product-abstract-concept-illustration_335657-4349.jpg" alt='Not Found'/>
      <h1>404 Not Found</h1>
      <p>
        Read <Link to="/">General News</Link>
      </p>
    </div>
  );
}