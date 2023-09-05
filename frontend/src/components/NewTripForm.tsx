import { Link } from "react-router-dom";
import "../Styles.css";
import { ChangeEvent, useState } from "react";

interface FormData {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

const NewTripForm: React.FC = () => {
  const initialFormData: FormData = {
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: [],
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleActivitiesChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newActivities = [...formData.activities];
    newActivities[index] = e.target.value;

    setFormData({
      ...formData,
      activities: newActivities,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/Trips", {
        method: "POST",
        headers: {
          authorization: "test-token",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("created new trip", responseData);
      } else {
        const errorData = await response.json();
        console.error("failed to create new trip", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        console.error("Network error. Please check your internet connection.");
      } else {
        console.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="new-trip-form">
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/Trips"}>
        <button>All Trips</button>
      </Link>
      <h1>NewTripForm</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>destination: </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            placeholder="destination"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>startDate: </label>
          <input
            type="text"
            name="startDate"
            value={formData.startDate}
            placeholder="startDate"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>endDate: </label>
          <input
            type="text"
            name="endDate"
            value={formData.endDate}
            placeholder="endDate"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>description: </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="description"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="price"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>image: </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="src of image"
            onChange={handleInputChange}
          />
        </div>
        <label>Activities:</label>
        {formData.activities.map((activity, index) => (
          <input
            key={index}
            type="text"
            name={`activity${index + 1}`}
            value={activity}
            placeholder="Activity"
            onChange={(e) => handleActivitiesChange(e, index)}
          />
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewTripForm;
