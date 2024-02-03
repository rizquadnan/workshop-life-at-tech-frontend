import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { render, screen } from "@/test/utils";

import AppSwitcher from "./AppSwitcher";

const useNavigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => useNavigateMock,
  };
});
beforeEach(() => {
  useNavigateMock.mockClear();
});
describe("<AppSwitcher", async () => {
  it("should render app title", () => {
    render(<AppSwitcher />);

    expect(
      screen.getByRole("heading", { name: "Baret PT App" }),
    ).toBeInTheDocument();
  });

  it("should render switch user type question", () => {
    render(<AppSwitcher />);

    expect(
      screen.getByText("Are you a trainer or customer ?"),
    ).toBeInTheDocument();
  });

  it("should navigate to proper url after click trainer", async () => {
    const user = userEvent.setup();
    render(<AppSwitcher />);

    expect(useNavigateMock).toHaveBeenCalledTimes(0);

    const button = screen.getByRole("button", { name: "Trainer" });
    await user.click(button);

    expect(useNavigateMock).toHaveBeenCalledOnce();
    expect(useNavigateMock).toHaveBeenCalledWith({
      pathname: "/login",
      search: "user_type=trainer",
    });
  });

  it("should navigate to proper url after click customer", async () => {
    const user = userEvent.setup();
    render(<AppSwitcher />);

    expect(useNavigateMock).toHaveBeenCalledTimes(0);

    const button = screen.getByRole("button", { name: "Customer" });
    await user.click(button);

    expect(useNavigateMock).toHaveBeenCalledOnce();
    expect(useNavigateMock).toHaveBeenCalledWith({
      pathname: "/login",
      search: "user_type=customer",
    });
  });
});
