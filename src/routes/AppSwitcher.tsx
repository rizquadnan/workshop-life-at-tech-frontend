import { createSearchParams, useNavigate } from "react-router-dom";

export default function AppSwitcher() {
  const navigate = useNavigate();
  const handleSelectUserType = (userType: "trainer" | "customer") => {
    navigate({
      pathname: "/login",
      search: createSearchParams({ user_type: userType }).toString(),
    });
  };
  return (
    <div>
      <h1>Baret PT App</h1>
      <h2>Are you trainer or customer ?</h2>
      <div>
        <button onClick={() => handleSelectUserType("trainer")}>Trainer</button>
        <button onClick={() => handleSelectUserType("customer")}>
          Customer
        </button>
      </div>
    </div>
  );
}
