import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteTrip ():JSX.Element {
    const { id } = useParams<{ id: string }>();
    const Navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await fetch(
            `http://localhost:3000/api/Trips/${id}`,
            {
              method: "DELETE",
              headers: {
                authorization: "test-token",
              },
            }
          );
    
          if (response.ok) {
            const responseData = await response.json();
            Navigate('/Trips')
            console.log("update the trip", responseData);
          } else {
            const errorData = await response.json();
            console.error("failed to update the trip", errorData);
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
        <div>
            <h1>Delete Trip</h1>
            <p>Are you sure you want to delete the trip?</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" key={id} hidden/>
                <button type="submit">Come on, delete it</button>
                <Link to={`/TripsDetail/${id}`}><button>Ummm... I'll think again</button></Link>
            </form>
        </div>
      )
}
export default DeleteTrip;