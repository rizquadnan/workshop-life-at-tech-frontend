import { expect, test } from "vitest";

import Button from "./Button";
import { render, screen } from "./test/utils";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Button />);

  expect(screen.getByText(/button/i)).toBeInTheDocument();
});
