import { Link } from "react-router-dom";
import "../Styles.css";

function NewTripForm(): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h1>NewTripForm</h1>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="" placeholder="age"/>
      </form>
    </div>
  );
}
export default NewTripForm;
