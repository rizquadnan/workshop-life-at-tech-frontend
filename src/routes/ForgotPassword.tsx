import { useLocation } from "react-router-dom";
export const ForgotPassword = () => {
  const location = useLocation();

  return (
    <div>
      <h1>ForgotPassword</h1>
      <pre>{JSON.stringify(location)}</pre>
    </div>
  );
};
