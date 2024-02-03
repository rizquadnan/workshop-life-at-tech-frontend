import { Link, Outlet } from "react-router-dom";

const PublicLayout = ({ userType }: { userType: "trainer" | "customer" }) => {
  return (
    <>
      <h2>Welcome {userType}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/forgot-password">Forgot Password</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default PublicLayout;
