import { useLocation } from "react-router-dom";
export const Register = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Register</h1>
      <pre>{JSON.stringify(location)}</pre>
    </div>
  );
};
