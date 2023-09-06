// import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface UserData {
  email: string;
  password: string;
  role: string;
}

const UserLogin: React.FC = () => {
  const initialLoginData: UserData = {
    email: "",
    password: "",
    role: 'admin'
  };
  const [loginData, setLoginData] = useState<UserData>(initialLoginData);
  const Navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
    

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          'authorization': "test-token",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
        redirect: 'follow'
      }) 
      console.log(JSON.stringify(loginData));
      

      if (response.ok) {
        const responseData = await response.json();
        Navigate('/')
        console.log("Login successful", responseData);
      } else {
        const errorData = await response.json();
        console.error("failed to login user", errorData);
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
      <h1>UserLogin</h1>
      <form method="post" onSubmit={handleSubmit} >
        <div  className="form-group">
          <label>email: </label>
          <input
            type="text"
            name="email"
            value={loginData.email}
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div  className="form-group">
          <label>password </label>
          <input
            type="text"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit"  className="btn btn-success">login</button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;