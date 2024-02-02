import { Outlet } from "react-router-dom";
export default function PrivateRoot() {
  return (
    <>
      <h1>Private</h1>
      <Outlet />
    </>
  );
}
