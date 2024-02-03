import { Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <>
      <h1>Public</h1>
      <Outlet />
    </>
  );
}
