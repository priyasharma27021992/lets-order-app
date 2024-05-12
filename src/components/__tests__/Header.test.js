import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header test cases", () => {
  it("should render header component with a login component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
