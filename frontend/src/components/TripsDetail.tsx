import { Link, useParams } from "react-router-dom";
import "../Styles.css";
import { useEffect, useState } from "react";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: Activ[];
}
type Activ = string;

async function fetchTrip(id: string): Promise<Trip | undefined> {
  try {
    const response = await fetch(`http://localhost:3000/api/trips/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const trip: Trip = await response.json();
    return trip;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

function showTripData(trip: Trip): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/Trips"}>
        <button>All Trips</button>
      </Link>
      <h1>TripsDetail</h1>
      <div className="card" id={trip.id}>
        <div className="card-body">
          <h3 className="card-title">{trip.name}</h3>
          <h5 className="card-text">{trip.destination}</h5>
          <div className="dates">
            <span className="startDate">{trip.startDate}</span>
            <span className="endDate">{trip.endDate}</span>
          </div>
          <img src={trip.image} alt={trip.name} className="tripImg" />
          <span className="description">{trip.description}</span>
          <span className="price">{`price: ${trip.price}`}</span>
          <span className="activities">
            {trip.activities.map((act,i) => (
              <p>{`activities ${i+1}: ${act}`}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

function TripsDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<Trip | undefined>(undefined);
  console.log(id);

  useEffect(() => {
    fetchTrip(id as string)
      .then((data) => {
        if (data) {
          setTrip(data);
        }
      })
      .catch(() => {
        // Handle error if needed
      });
  }, [id]);

  return <div>{trip ? showTripData(trip) : <div>Loading...</div>}</div>;
}

export default TripsDetail;
