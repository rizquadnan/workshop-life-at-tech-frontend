import { Outlet } from "react-router-dom";
export default function PublicRoot() {
  return (
    <>
      <h1>Public</h1>
      <Outlet />
    </>
  );
}
