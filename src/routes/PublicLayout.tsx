import { Link, Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <>
      <h1>Public</h1>
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
}
