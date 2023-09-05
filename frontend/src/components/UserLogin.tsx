import { Link } from "react-router-dom";

function UserLogin(): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h1>UserLogin</h1>
    </div>
  );
}
export default UserLogin;
