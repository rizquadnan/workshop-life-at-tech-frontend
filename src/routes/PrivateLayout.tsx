import { Outlet } from "react-router-dom";
export default function PrivateLayout() {
  return (
    <>
      <h1>Private</h1>
      <Outlet />
    </>
  );
}
