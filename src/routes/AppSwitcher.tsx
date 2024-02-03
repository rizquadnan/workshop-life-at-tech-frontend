import { useState } from "react";

import PublicLayout from "./PublicLayout";
export default function AppSwitcher() {
  const [userType, setUserType] = useState<"trainer" | "customer" | null>(null);

  if (!userType) {
    return (
      <div>
        <h1>Baret PT App</h1>
        <h2>Are you trainer or customer ?</h2>
        <div>
          <button onClick={() => setUserType("trainer")}>Trainer</button>
          <button onClick={() => setUserType("customer")}>Customer</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Baret PT App</h1>
      <PublicLayout userType={userType} />
    </>
  );
}
