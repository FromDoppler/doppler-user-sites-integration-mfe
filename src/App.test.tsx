import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Doppler User Sites Integration Micro-Frontend", () => {
  const LandingContainer = "LandingContainer";

  render(<App />);

  expect(screen.getByLabelText(LandingContainer)).toBeInTheDocument();
});
