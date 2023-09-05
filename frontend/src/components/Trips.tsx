import { useEffect, useState } from "react";
import "../Styles.css";
import { Link } from "react-router-dom";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

async function fetchTrips(): Promise<Trip[] | undefined> {
  try {
    const response = await fetch("http://localhost:3000/api/trips");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const trips: Trip[] = await response.json();
    return trips;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

function TripCard({ trip}: { trip: Trip }): JSX.Element {
  return (
    <Link to={`/TripsDetail/${trip.id}`}>
      <div className="card">
        <div className="card-body" id={trip.id}>
          <h3 className="card-title">{trip.name}</h3>
          <h5 className="card-text">{trip.destination}</h5>
          <div className="dates">
            <span className="startDate">{trip.startDate}</span>
            <span className="endDate">{trip.endDate}</span>
          </div>
          <img src={trip.image} alt={trip.name} className="tripImg" />
        </div>
      </div>
    </Link>
  );
}

function TripList(): JSX.Element {
  const [trips, setTrips] = useState<Trip[] | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTrips: Trip[] | undefined = await fetchTrips();
        if (fetchedTrips) {
          setTrips(fetchedTrips);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {trips &&
        trips.map((trip) => (
          <div key={trip.id}>
            <TripCard trip={trip} />
          </div>
        ))}
    </div>
  );
}

function Trips(): JSX.Element {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/NewTripForm"}>
        <button>New Trip</button>
      </Link>
      <h1>Trips</h1>
      <TripList />
    </div>
  );
}

export default Trips;
