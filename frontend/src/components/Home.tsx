import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <div>
      <Link to={"/Trips"} className="btn btn-primary">
        <button>All Trips</button>
      </Link>
      <Link to={'/UserLogin'} className="btn btn-secondary">
      <button>Login</button></Link>
      <Link to={'/UserRegistration'}  className="btn btn-success">
      <button>Sign up</button></Link>
      <h1 className="display-4">Home</h1>
      <h2 className="h5">Welcome to React!</h2>
      <p className="lead">This is the home page.</p>
    </div>
  );
}

export default Home;
