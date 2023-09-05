import { Link } from "react-router-dom";
import "../Styles.css";

function UpdateTripForm(): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h1>UpdateTripForm</h1>
      <form method="post">
        {/* <label for="name" >Name</label> */}
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="destination" placeholder="destination" />
        <br />
        <input type="date" name="startDate" placeholder="startDate" />
        <br />
        <input type="date" name="endDate" placeholder="endDate" />
        <br />
        <input type="text" name="description" placeholder="description" />
        <br />
        <input type="number" name="price" placeholder="price" />
        <br />
        <input type="text" name="image" placeholder="src of image" />
        <br />
        <input type="text" name="active1" placeholder="active" />
        <input type="text" name="active2" placeholder="active" />
        <input type="text" name="active3" placeholder="active" />
        <button type="submit">Add the Trip</button>
      </form>
    </div>
  );
}
export default UpdateTripForm;
