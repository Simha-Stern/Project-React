import { useEffect, useState } from "react";
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
          <img src={trip.image} alt={trip.name} className="card-img-top" />
        <div className="card-body" id={trip.id}>
          <h3 className="card-title">{trip.name}</h3>
          <p className="card-text">{trip.destination}</p>
          <div className="dates">
            <span className="startDate">{trip.startDate}</span>
            <span className="endDate">{trip.endDate}</span>
          </div>
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
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"}>
        <button className="navbar-toggler">Home</button>
      </Link>
      <Link to={"/NewTripForm"}>
        <button className="navbar-toggler">New Trip</button>
      </Link>
      <br/>
      <h1 className="display-4 font-weight-bold text-center">Trips</h1>
      <TripList />
    </div>
  );
}

export default Trips;
