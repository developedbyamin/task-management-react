import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<any>();
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (!data) {
      navigate("/login");
    } else {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
