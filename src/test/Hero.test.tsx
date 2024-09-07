import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("should render the NavBar component", () => {
    render(<Hero />);
    // Check if the NavBar component is rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render the paragraph with the correct text", () => {
    render(<Hero />);
    // Check if the paragraph text is present
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velitnulla. In hac habitasse platea dictumst./i
      )
    ).toBeInTheDocument();
  });
});
