import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type Children = ReturnType<typeof createBrowserRouter>;
const RootWrapper = ({ children }: { children: Children }) => {
  return <RouterProvider router={children} />;
};

export default RootWrapper;
