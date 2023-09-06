import { Link } from "react-router-dom";

function registered(): JSX.Element {
  return (
    <div className="registered-container">
      <Link to={"/"} className="btn btn-primary">
        Home
      </Link>
      <Link to={"/UserLogin"} className="btn btn-secondary">
        Login
      </Link>
      <p className="success-message">User registered successfully</p>
    </div>
  );
}

export default registered;
