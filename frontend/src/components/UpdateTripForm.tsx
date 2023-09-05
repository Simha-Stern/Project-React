import { Link } from "react-router-dom";
import "../src/Styles.css";

function UpdateTripForm(): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h1>UpdateTripForm</h1>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="" placeholder="age" />
      </form>
    </div>
  );
}
export default UpdateTripForm;
