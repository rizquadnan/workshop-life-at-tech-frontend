import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type Children = ReturnType<typeof createBrowserRouter>;
const RootWrapper = ({ children }: { children: Children }) => {
  return (
    <RouterProvider router={children} fallbackElement={<h1>Loading...</h1>} />
  );
};

export default RootWrapper;
