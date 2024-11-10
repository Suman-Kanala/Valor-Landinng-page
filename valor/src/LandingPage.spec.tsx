import { render, screen, fireEvent } from "@testing-library/react";
import LandingPage from "./LandingPage";
import React from "react";

describe("LandingPage Component", () => {
  beforeEach(() => {
    render(<LandingPage />);
  });
  test("renders the hero section with the correct text", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Your Future, Our Expertise"
    );
    expect(
      screen.getByText(
        /Helping you manage your finances for a better tomorrow/i
      )
    ).toBeInTheDocument();
  });

  test("renders the services section", () => {
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Investment Management/i)).toBeInTheDocument();
    expect(screen.getByText(/Financial Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/Retirement Solutions/i)).toBeInTheDocument();
  });

  test("renders the about section", () => {
    expect(
      screen.getByRole("heading", { name: /About Us/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Valor is dedicated to providing top-notch money management services/i
      )
    ).toBeInTheDocument();
  });

  test("renders the testimonials section", () => {
    expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Valor helped me turn my finances around/i)
    ).toBeInTheDocument();
  });

  test("renders the footer with contact information", () => {
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: info@valor.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone: \(123\) 456-7890/i)).toBeInTheDocument();
    expect(
      screen.getByText(/© 2023 Valor Money Management/i)
    ).toBeInTheDocument();
  });

  test("Get Started button triggers an alert", () => {
    // Mock the alert function
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("Redirecting to sign-up...");

    // Restore the original alert function
    alertMock.mockRestore();
  });
});
