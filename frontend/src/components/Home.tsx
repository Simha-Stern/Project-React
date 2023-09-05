import { Link } from "react-router-dom";
import "../Styles.css";

function Home(): JSX.Element {
  return (
    <div>
      <Link to={"/Trips"}>
        <button>All Trips</button>
      </Link>
      <button>Login</button>
      <button>Signin</button>
      <h1>Home</h1>
      <h2>Welcome to React!</h2>
      <p>This is the home page.</p>
    </div>
  );
}

export default Home;
