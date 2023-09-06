// import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context";

interface UserData {
  email: string;
  password: string;
  role: string;
}

const UserRegistration: React.FC = () => {
  const initialFormData: UserData = {
    email: "",
    password: "",
    role: 'admin'
  };
  const [formData, setFormData] = useState<UserData>(initialFormData);
  const Navigate = useNavigate()

  // const {token} = UseUserContext()
  
  const context = useContext(Context);
  const token = context?.token || "default-token-value";
  const setToken = context?.setToken
  
  // const token = ContextUse.token

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          'authorization': token || 'test-token',
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        redirect: 'follow'
      }) 
      console.log(JSON.stringify(formData));
      

      if (response.ok) {
        const responseData = await response.json();
        if (setToken)
        {setToken(responseData.data.responseObj.token)}
        Navigate('/registered')
        console.log("created new User", responseData);
      } else {
        const errorData = await response.json();
        console.error("failed to create new user", errorData);
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
    <div className="new-user-form">
      <Link to={"/"}>
        <button className="btn btn-primary">Home</button>
      </Link>
      <h1>UserRegistration</h1>
      <form method="post" onSubmit={handleSubmit} >
        <div  className="form-group">
          <label>email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div  className="form-group">
          <label>password: </label>
          <input
            type="text"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit"  className="btn btn-success">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
